export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-upload-ezequiel"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://rxgqdhumch.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_KLW5H2X3s",
    APP_CLIENT_ID: "3otg4dbmefcp49cdpf2b73dm76",
    IDENTITY_POOL_ID: "eu-central-1:35c0cfc4-b7b2-4858-a969-221b5123168c"
  }
};