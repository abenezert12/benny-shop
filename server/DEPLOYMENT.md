# Benny Shop Backend - Deployment Guide

Complete guide for deploying the backend to production.

## Pre-Deployment Checklist

- [ ] Update `JWT_SECRET` to a strong random value
- [ ] Set `NODE_ENV=production`
- [ ] Configure production database URL
- [ ] Set up SSL/TLS certificates
- [ ] Configure CORS for production domain
- [ ] Set up monitoring and logging
- [ ] Enable rate limiting appropriately
- [ ] Configure backup strategy for database
- [ ] Set up health checks
- [ ] Review security headers

## Deployment Options

### 1. Heroku Deployment

**Prerequisites:**
- Heroku account
- Heroku CLI installed

**Steps:**

```bash
# 1. Create Heroku app
heroku create your-app-name

# 2. Add PostgreSQL addon
heroku addons:create heroku-postgresql:standard-0

# 3. Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=$(openssl rand -base64 32)
heroku config:set CORS_ORIGIN=https://your-frontend-domain.com

# 4. Deploy
git push heroku main

# 5. Run migrations
heroku run npm run migrate

# 6. View logs
heroku logs --tail
```

### 2. Docker Deployment

**Build Docker Image:**
```bash
docker build -t benny-shop-api:latest .
```

**Push to Registry (Docker Hub):**
```bash
# Tag image
docker tag benny-shop-api:latest your-docker-hub/benny-shop-api:latest

# Login
docker login

# Push
docker push your-docker-hub/benny-shop-api:latest
```

**Deploy with Docker:**
```bash
docker run -d \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e DATABASE_URL=postgresql://... \
  -e JWT_SECRET=... \
  -e CORS_ORIGIN=https://... \
  --name benny-api \
  your-docker-hub/benny-shop-api:latest
```

### 3. AWS EC2 Deployment

**Prerequisites:**
- AWS account
- EC2 instance running Ubuntu 22.04+

**Steps:**

```bash
# 1. SSH into instance
ssh -i your-key.pem ec2-user@your-instance-ip

# 2. Update system
sudo apt update && sudo apt upgrade -y

# 3. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 4. Install PM2 for process management
sudo npm install -g pm2

# 5. Clone repository
git clone https://github.com/your-repo/benny-shop.git
cd benny-shop/server

# 6. Install dependencies
npm install

# 7. Build
npm run build

# 8. Set environment variables
echo "NODE_ENV=production" > .env
echo "JWT_SECRET=..." >> .env
echo "DATABASE_URL=..." >> .env
echo "CORS_ORIGIN=..." >> .env

# 9. Start with PM2
pm2 start dist/index.js --name "benny-api"

# 10. Enable PM2 startup
pm2 startup
pm2 save

# 11. View status
pm2 status
pm2 logs
```

### 4. Railway Deployment

**Prerequisites:**
- Railway account

**Steps:**

```bash
# 1. Install Railway CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. Initialize project
railway init

# 4. Add PostgreSQL
railway add --plugin postgresql

# 5. Set environment variables
railway variables set NODE_ENV=production
railway variables set JWT_SECRET=<strong-secret>
railway variables set CORS_ORIGIN=https://...

# 6. Deploy
railway up

# 7. View logs
railway logs
```

### 5. DigitalOcean App Platform

**Steps:**

1. Go to DigitalOcean Dashboard → Apps → Create App
2. Select your GitHub repository
3. Configure build command: `npm run build`
4. Configure run command: `npm start`
5. Add environment variables
6. Add PostgreSQL database
7. Click Deploy

## Database Setup for Production

### AWS RDS PostgreSQL
```bash
# Create parameter group
aws rds create-db-parameter-group \
  --db-parameter-group-name benny-shop \
  --db-parameter-group-family postgres15

# Create database instance
aws rds create-db-instance \
  --db-instance-identifier benny-shop-db \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --master-username dbadmin \
  --master-user-password YourStrongPassword123! \
  --allocated-storage 20 \
  --backup-retention-period 7
```

### GCP Cloud SQL
1. Create Cloud SQL instance (PostgreSQL 15)
2. Configure authorized networks
3. Create database
4. Create database user
5. Connect from your app

## Environment Variables for Production

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:password@host:5432/benny_shop
JWT_SECRET=<generate-strong-random-string>
JWT_EXPIRY=7d
JWT_REFRESH_EXPIRY=30d
CORS_ORIGIN=https://your-frontend-domain.com

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=app-specific-password

# Payment Gateway (optional)
STRIPE_SECRET_KEY=sk_live_...

# AWS S3 (optional)
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_S3_BUCKET=benny-shop-prod
AWS_REGION=us-east-1

# Monitoring
SENTRY_DSN=https://...
```

## SSL/TLS Certificate

### Let's Encrypt (Free)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --standalone -d your-domain.com

# Renew automatically
sudo systemctl enable certbot.timer
```

## Monitoring and Logging

### Sentry Error Tracking
```bash
npm install @sentry/node
```

Then in `src/index.ts`:
```typescript
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
```

### PM2 Monitoring
```bash
# Install PM2 Plus
pm2 plus

# Monitor in real-time
pm2 monit
```

### CloudWatch Logs (AWS)
```typescript
import AWS from 'aws-sdk';

const cloudwatch = new AWS.CloudWatch();

// Log metrics
cloudwatch.putMetricData({
  Namespace: 'BennyShop',
  MetricData: [{
    MetricName: 'APIRequests',
    Value: 1,
    Unit: 'Count'
  }]
});
```

## Performance Optimization

### Database Connection Pooling
- Already configured in `src/config/database.ts`
- Adjust pool size for production:
```typescript
const pool = new Pool({
  max: 20,  // Increase for production
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### Redis Caching (Optional)
```bash
npm install redis
```

### Compression
```bash
npm install compression
```

Add to `src/index.ts`:
```typescript
import compression from 'compression';
app.use(compression());
```

## Backup Strategy

### PostgreSQL Backups
```bash
# Automated daily backup
0 2 * * * pg_dump $DATABASE_URL | gzip > /backups/db-$(date +\%Y\%m\%d).sql.gz

# Restore backup
gunzip < /backups/db-20240101.sql.gz | psql $DATABASE_URL
```

### Database Replication
- Enable automatic backups on hosted providers
- Set retention period to 30+ days
- Test restore process regularly

## Security Hardening

### Update Dependencies
```bash
npm audit
npm audit fix
npm update
```

### Security Headers
Already configured in `src/index.ts` with Helmet.js

### Rate Limiting
Configure in `.env`:
```env
API_RATE_LIMIT_WINDOW_MS=900000
API_RATE_LIMIT_MAX_REQUESTS=100
```

## Monitoring Checklist

- [ ] API uptime monitoring
- [ ] Database connection health
- [ ] Error tracking (Sentry)
- [ ] Performance metrics
- [ ] Database backups
- [ ] SSL certificate expiration
- [ ] Disk space usage
- [ ] Memory usage
- [ ] Request latency
- [ ] Database query performance

## Post-Deployment

```bash
# Verify health endpoint
curl https://your-domain.com/health

# Check logs
# (Platform-specific)

# Test API
curl https://your-domain.com/api/products

# Run smoke tests
npm test
```

## Rollback Plan

```bash
# Revert to previous version
git revert <commit-hash>
git push

# Redeploy
# (Platform-specific)
```

## Scaling Strategies

### Horizontal Scaling
- Use load balancer (nginx, AWS ALB)
- Run multiple API instances
- Use connection pooling

### Database Scaling
- Read replicas for read-heavy queries
- Vertical scaling for write operations
- Partitioning for large tables

### Caching
- Redis for frequently accessed data
- CDN for static assets

## Cost Optimization

- Use spot instances for non-critical workloads
- Right-size database instance
- Use auto-scaling groups
- Monitor and clean up unused resources
- Enable database compression

## Support and Maintenance

- Monitor error rates daily
- Review performance metrics weekly
- Update dependencies monthly
- Security audits quarterly
- Disaster recovery drills

## Troubleshooting Production Issues

### High CPU Usage
```bash
# Check slow queries
pm2 logs | grep "Slow query"

# Optimize database indexes
```

### Memory Leaks
```bash
# Check memory usage
pm2 monit

# Take heap dumps for analysis
```

### Database Connection Issues
```bash
# Check connection pool status
# Add monitoring to pool events
```

### Deployment Rollback
```bash
# Revert and redeploy
git revert <commit>
git push
```

## Additional Resources

- [Node.js Production Checklist](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Express.js Security](https://expressjs.com/en/advanced/best-practice-security.html)
- [PostgreSQL Best Practices](https://wiki.postgresql.org/wiki/Performance_Optimization)
