# Setting Up GitHub Secrets for Deployment

This project uses GitHub Secrets to securely inject Firebase and Telegram credentials during deployment. Follow these steps to configure your secrets.

## Required Secrets

### Firebase Configuration (7 secrets)

1. **FIREBASE_API_KEY**
   - Your Firebase API key
   - Found in: Firebase Console > Project Settings > General > Web API Key

2. **FIREBASE_AUTH_DOMAIN**
   - Format: `your-project.firebaseapp.com`
   - Found in: Firebase Console > Project Settings > General

3. **FIREBASE_PROJECT_ID**
   - Your Firebase project ID
   - Found in: Firebase Console > Project Settings > General

4. **FIREBASE_STORAGE_BUCKET**
   - Format: `your-project.appspot.com`
   - Found in: Firebase Console > Project Settings > General

5. **FIREBASE_MESSAGING_SENDER_ID**
   - Your Firebase messaging sender ID
   - Found in: Firebase Console > Project Settings > Cloud Messaging

6. **FIREBASE_APP_ID**
   - Your Firebase app ID
   - Found in: Firebase Console > Project Settings > General

7. **FIREBASE_MEASUREMENT_ID**
   - Your Google Analytics measurement ID (optional)
   - Found in: Firebase Console > Project Settings > General

### Telegram Bot Configuration (2 secrets)

1. **TELEGRAM_BOT_TOKEN**
   - Your Telegram bot token
   - Get it from: [@BotFather](https://t.me/botfather) on Telegram

2. **TELEGRAM_CHANNEL_ID**
   - Your Telegram channel or chat ID
   - Use [@userinfobot](https://t.me/userinfobot) to get your channel ID

## How to Add Secrets to GitHub

### Step 1: Navigate to Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** > **Actions**

### Step 2: Add Each Secret

1. Click **New repository secret**
2. Enter the secret **Name** (exactly as listed above)
3. Enter the secret **Value** (your actual credential)
4. Click **Add secret**

### Step 3: Repeat for All Secrets

Add all 9 secrets listed above (or 7 if not using Telegram).

## Verification

After adding secrets, you can verify the workflow:

1. Push a commit to the `main` branch
2. Go to **Actions** tab in your repository
3. Click on the latest workflow run
4. Check that the "Inject Firebase Secrets" and "Inject Telegram Secrets" steps complete successfully

## Security Notes

- ✅ Secrets are encrypted and only exposed to the workflow during runtime
- ✅ Secrets are never displayed in workflow logs
- ✅ Each secret should be added individually (don't combine them)
- ⚠️ Never commit actual credentials to your repository
- ⚠️ Rotate your secrets if they're ever exposed

## Local Development

For local development, you have two options:

### Option 1: Direct Configuration (Testing Only)

Edit `scripts/firebase-init.js` and `scripts/customer-feedback.js` directly with your credentials.

**⚠️ Warning:** Never commit these changes!

### Option 2: Use Environment Variables

The code will check for environment variables first, falling back to placeholder values.

## Troubleshooting

### "Firebase not initialized" error

- Verify all 7 Firebase secrets are added correctly
- Check that secret names match exactly (case-sensitive)
- Ensure there are no extra spaces in secret values

### "Telegram error" in feedback submission

- Verify TELEGRAM_BOT_TOKEN is correct
- Ensure TELEGRAM_CHANNEL_ID is the correct format
- Test your bot token with Telegram Bot API

### Workflow fails at "Inject Secrets" step

- Check that all required secrets are added
- Verify secret names are spelled correctly
- Ensure no special characters are causing sed issues

## Need Help?

Check these resources:

- [GitHub Actions Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

- [Firebase Setup Documentation](https://firebase.google.com/docs/web/setup)

- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
