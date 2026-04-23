# Contact Lambda (API Gateway -> SES)

This Lambda receives:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "message": "Hello"
}
```

And forwards it to your inbox using Amazon SES.

## 1) Install dependencies

```bash
cd aws/lambda/contact
npm install
```

## 2) Zip for upload

Zip the contents of this folder (including `node_modules`) and upload to Lambda.

## 3) Lambda settings

- Runtime: Node.js 20.x
- Handler: `index.handler`

Environment variables:

- `AWS_REGION` (example: `ap-south-1`)
- `SES_FROM_EMAIL` (verified SES sender)
- `TO_EMAIL` (your inbox)
- `CORS_ORIGIN` (example: `https://your-domain.com`)

## 4) IAM policy for Lambda role

Allow SES send:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["ses:SendEmail", "ses:SendRawEmail"],
      "Resource": "*"
    }
  ]
}
```

## 5) API Gateway

- Route: `POST /contact` -> this Lambda
- Enable CORS for your site origin

Then set frontend env:

`NEXT_PUBLIC_CONTACT_API_URL=https://<api-id>.execute-api.<region>.amazonaws.com/prod/contact`
