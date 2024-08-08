// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { GlobalErrorHandler } from '@classifieds-ui/logging';

// https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html
const signingKeys = {"keys":[{"kid":"3659ab51-91cc-4abe-af93-9f758809a27c","kty":"RSA","n":"wP5WYy2xU-PQP-tcMgykacC_n-evEmXF5gwNRPtnXbULcbdrCnpi5Mdb2l7Oy3o8HYBc5HurDVQht1qDFbHwe82DrbKhtdPyfldyD-7zrKl9GapolREEgVmxjbw4hcnyGuCwTxhVDxs7CDK8cct4F5XUnemKVJrW2lmtLhrHrZP6pWl-KrHmUV4nLAhe3gMKcOzIDmkvVbDo3hdVgNalBZ4j3hLcrodTKp7NnsR1q6n6uTBQhZRb_Ah3CHlV_Bj3Hpcl4VK14BQFQyNl77uTXvIdvOO671Iwp1p1F1PbWBHU7NAiyExC6D68vAke_OV7_7apU_tcxIo1d1eyVSJiYQ","e":"AQAB"}]};

export const environment = {
  production: false,
  site: 'spearhead-canva',
  apiGatewaySettings: {
    // endpointUrl: 'https://localhost:44340',
    endpointUrl: "https://sio0nkn7b0.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-canva-objects/shapeshifter"
  },
  mediaSettings: {
    endpointUrl: 'https://sio0nkn7b0.execute-api.us-east-1.amazonaws.com/spearhead-canva/media',
    cloudinaryUrl: 'https://api.cloudinary.com/v1_1/dj4vvkgzw',
    uploadPreset: 'i0hm4opm',
    imageUrl: 'https://sio0nkn7b0.execute-api.us-east-1.amazonaws.com/spearhead-canva',
    bucket: 'classifieds-ui-dev',
    prefix: 'media/'
  },
  adSettings: {
    adUrl: 'https://d2o66qxp1qwfb9.cloudfront.net/ads'
  },
  taxonomySettings: {
    vocabularyUrl: 'https://d2o66qxp1qwfb9.cloudfront.net/vocabularies'
  },
  profileSettings: {
    profileUrl: 'https://d2o66qxp1qwfb9.cloudfront.net/profiles'
  },
  loggingSettings: {
    endpointUrl: "https://localhost:44340/logging"
  },
  chatSettings: {
    // endpointUrl: "https://localhost:44340/chat"
    // endpointUrl: "http://classifieds-chat-dev-2064029101.us-east-1.elb.amazonaws.com"
    endpointUrl: "wss://61rdyvvayj.execute-api.us-east-1.amazonaws.com/dev"
  },
  oktaSettings: {
    redirectUri: 'http://localhost:4000/implicit/callback',
    clientId: '0oa33yn39XtrnvY774x6',
  },
  cognitoSettings: {
    identityPoolId: 'us-east-1:6f5cdc41-35b0-41ca-9f6b-7eca11320942',
    region: 'us-east-1',
    userPoolId: 'us-east-1_z8PhK3D8V'
  },
  panelsSettings: {
    openSearchDomain: 'search-classifieds-ui-dev-eldczuhq3vesgpjnr3vie6cagq',
    s3Bucket: 'classifieds-ui-dev',
    objectsRootUrl: 'https://rollthecloudinc.github.io/spearhead-canva-objects'
  },
  alienaliasSettings: {
    openSearchDomain: 'search-classifieds-ui-dev-eldczuhq3vesgpjnr3vie6cagq'
  },
  /*clientSettings: {
    authority: 'https://localhost:44392',
    client_id: 'classifieds_spa',
    redirect_uri: 'http://localhost:4200/auth-callback',
    silent_redirect_uri: 'http://localhost:4200/silent-refresh.html',
    response_type: "code",
    scope:"openid profile ads_api media_api chat IdentityServerApi taxonomy_api api_gateway",
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true
  }*/
  rumSettings: {
    appId: '',
    guestRoleArn: '',
    identityPoolId: '',
    region: ''
  },
  clientSettings: {
    authority: 'https://www.canva.com',
    client_id: 'OC-AZEXdyhN5zus',
    redirect_uri: 'https://spearhead-canva.climateaware-dev.eco/auth-callback',
    silent_redirect_uri: 'https://spearhead-canva.climateaware-dev.eco/silent-refresh.html',
    response_type: "code",
    scope:"design:content:read design:meta:read design:content:write design:permission:read design:permission:write comment:read comment:write brandtemplate:meta:read brandtemplate:content:read profile:read", /*'ads_api media_api chat IdentityServerApi taxonomy_api api_gateway",*/
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    stateStore: undefined,
    userStore: undefined,
    metadata: {
      issuer: "https://api.canva.com/rest/v1/apps/AAGJBJc7pZs",
      authorization_endpoint: "https://www.canva.com/api/oauth/authorize",
      userinfo_endpoint: "https://www.canva.com/api/oauth/userInfo",
      end_session_endpoint: "https://www.canva.com/api/oauth/revoke",
      token_endpoint: "https://sio0nkn7b0.execute-api.us-east-1.amazonaws.com/canva/token",
      jwks_uri: "https://api.canva.com/rest/v1/apps/AAGJBJc7pZs/jwks"
    },
    signingKeys: signingKeys.keys
  }
};

const x = 'xxxxxxxxxxxxxxxxxxxxxxxsxxxx';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.  