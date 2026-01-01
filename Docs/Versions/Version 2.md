# Version 2: Populating the database

## n8n Setup

### v2_0_0_1 Add Authentication in FastAPI - make backend not public
Purpose: if `http://<instance-ip>:8000` is public, then security issue and data leak. 

- [x] Understand n8n authentication requirements (Generic Auth with Header)
- [x] Add JWT dependency to ingredients endpoints
- [x] Verify frontend sends auth headers
- [x] Disable API docs in production
- [x] Change `NODE_ENV=development` in .env to `NODE_ENV=production` to make FastAPI swagger ui not public.
- [x] Deploy to AWS EC2 with Docker and verify authentication works

### v2_0_0_2 How to get Bearer token / Access token for n8n

Purpose: Get JWT access token for n8n API authentication

- [x] Switch NODE_ENV to development to enable Swagger UI
- [x] Restart Docker container
- [x] Create/register account using email for n8n
- [x] Login via Swagger UI to get access_token
- [x] Save the access_token
- [x] Switch NODE_ENV back to production
- [x] Restart Docker container
- [x] In n8n: HTTP Request → Generic Auth → Header Auth → Authorization: Bearer <access_token>
