export const environment = {
  production: false,
  firebase: {
    apiKey: '${{ secrets.API_KEY }}',
    authDomain: '${{ secrets.AUTH_DOMAIN }}',
    projectId: '${{ secrets.PROJECT_ID }}',
    storageBucket: '${{ secrets.STORAGE_BUCKET }}',
    messagingSenderId: '${{ secrets.MESSAGING_SENDER_ID }}',
    appId: '${{ secrets.APP_ID }}'
  }
};
