# **PHASE 6 — Deployment, Operations & Cost**

## 6.1 Deployment Strategy

**Questions**

- Manual or automated?
- Environments?
- Rollback strategy?

---

## 6.2 CI/CD Pipeline

**Questions**

- When do builds trigger?
- Automated tests?
- Deployment automation?

**Suggested Guide**

> GitHub Actions → AWS EC2 (ECS marked as Version 2+ for scaling)
>

---

## 6.3 Monitoring & Logging

**Questions**

- What metrics matter?
- Error tracking?
- Alerting rules?

**Suggested Guide**

> CloudWatch + logs + alarms
> 

---

## 6.4 Cost Estimation (AWS)

**Questions**

- Monthly cost?
- Cost per user?
- Budget alerts?

**Suggested Guide**

> Set AWS Budget alerts early
>

### AWS Cognito Costs

**Service Type**: Serverless (no always-on charges)

**Free Tier**:
- 50,000 Monthly Active Users (MAUs)
- 50,000 API calls per month

**Paid Usage**:
- $0.0055 per MAU beyond free tier
- $0.0000022 per API call beyond free tier

**Key Points**:
- No continuous running costs (unlike EC2)
- Only charged for actual user operations (registration, login, etc.)
- Development/testing stays within free tier
- Scales automatically without management
- No need to "turn off" - service is on-demand

**Cost Optimization**:
- Delete unused user pools in development
- Monitor usage in AWS Cost Explorer
- Free tier covers typical development workloads

---
