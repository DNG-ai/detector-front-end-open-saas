# <YOUR_APP_NAME>

Built with [Wasp](https://wasp-lang.dev), based on the [Open Saas](https://opensaas.sh) template.

## Development
.
### Running locally
 - Make sure you have the `.env.client` and `.env.server` files with correct dev values in the root of the project.
 - Run the database with `wasp start db` and leave it running.
 - Run `wasp start` and leave it running.
 - [OPTIONAL]: If this is the first time starting the app, or you've just made changes to your entities/prisma schema, also run `wasp db migrate-dev`.



postgres DB 

in .wasp/out/server/.env
DATABASE_URL="postgresql://postgresWaspDevUser:postgresWaspDevPass@localhost:5432/OpenSaaS-fe2fdef8f2"


username: postgresWaspDevUser




GCP deploy instructions:

https://github.com/wasp-lang/open-saas/issues/178


gcloud artifacts repositories create open-saas \
    --repository-format=docker \
    --location=us-central1 \
    --description="Docker repository for Open SaaS"
    
    
    

docker build -t backend-image -f Dockerfile .
# Adapt name and region to the one created earlier
docker tag backend-image us-central1-docker.pkg.dev/dng-production/open-saas/backend-image
docker push us-central1-docker.pkg.dev/dng-production/open-saas/backend-image


gcloud run deploy backend-opensaas \
            --image us-central1-docker.pkg.dev/dng-production/open-saas/backend-image \
            --project dng-staging \
            --platform managed \
            --region us-central1 \
            --max-instances 2 \ # This limit auto scaling, if you have a lot of traffic you can increase this
            --allow-unauthenticated \
            --set-env-vars "DATABASE_URL=postgresql://postgresWaspDevUser:postgresWaspDevPass@localhost:5432/OpenSaaS-fe2fdef8f2" \
            --set-env-vars "STRIPE_KEY=sk_test_51MvgJmDJo7Z5U58O4gSqW6W1fVlpFaCskCGwDZfmg96y02E0zAo2dmHTGb08g9d0K2FA37rlH0ZellpY9WSt2FbW001QwPhmyU" \
            --set-env-vars "GOOGLE_CLIENT_ID=fake_google_client_id" \
            --set-env-vars "GOOGLE_CLIENT_SECRET=fake_google_client_secret" \
            --set-env-vars "HOBBY_SUBSCRIPTION_PRICE_ID=fake_hobby_subscription_price_id" \
            --set-env-vars "PRO_SUBSCRIPTION_PRICE_ID=fake_pro_subscription_price_id" \
            --set-env-vars "SENDGRID_API_KEY=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" \
            --set-env-vars "STRIPE_WEBHOOK_SECRET=whsec_e7fcae3b6ebf2c4fe28d4ce662b07791b6e222798e459d25f3504666853bf39d" \
            --set-env-vars "WASP_SERVER_URL=fake_wasp_server_url" \ # <--- You don't know it for now, but change it after the first deployment to the real one
            --set-env-vars "WASP_WEB_CLIENT_URL=fake_wasp_web_client_url" \ # <--- Use the value you got at the end of step 2 that looks like https://{FILL_YOUR_FULL__GCP_PROJECT_NAME}.web.app
            --set-env-vars "ADMIN_EMAILS=simon@dng.ai" \
            --set-env-vars "JWT_SECRET=lWwpZe3aCa1nk3Hdb8Q/OUfdSLYd8LaW"
            
            




us-central1-docker.pkg.dev/dng-production/dng-apps




          gcloud run deploy backend \
            --image us-central1-docker.pkg.dev/dng-production/dng-apps/detector/backend-image \
            --project {FILL_YOUR_FULL__GCP_PROJECT_NAME} \
            --platform managed \
            --region europe-west1 \
            --max-instances 2 \ # This limit auto scaling, if you have a lot of traffic you can increase this
            --allow-unauthenticated \
            --set-env-vars "DATABASE_URL=fake_database_url" \
            --set-env-vars "STRIPE_KEY=fake_stripe_key" \
            --set-env-vars "GOOGLE_CLIENT_ID=fake_google_client_id" \
            --set-env-vars "GOOGLE_CLIENT_SECRET=fake_google_client_secret" \
            --set-env-vars "HOBBY_SUBSCRIPTION_PRICE_ID=fake_hobby_subscription_price_id" \
            --set-env-vars "PRO_SUBSCRIPTION_PRICE_ID=fake_pro_subscription_price_id" \
            --set-env-vars "SENDGRID_API_KEY=fake_sendgrid_api_key" \
            --set-env-vars "STRIPE_WEBHOOK_SECRET=fake_stripe_webhook_secret" \
            --set-env-vars "WASP_SERVER_URL=fake_wasp_server_url" \ # <--- You don't know it for now, but change it after the first deployment to the real one
            --set-env-vars "WASP_WEB_CLIENT_URL=fake_wasp_web_client_url" \ # <--- Use the value you got at the end of step 2 that looks like https://{FILL_YOUR_FULL__GCP_PROJECT_NAME}.web.app
            --set-env-vars "ADMIN_EMAILS=fake_admin_emails" \
            --set-env-vars "JWT_SECRET=fake_jwt_secret"
            
            
            