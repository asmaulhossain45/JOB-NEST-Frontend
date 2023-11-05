const Blog1 = () => {
  return (
    <div>
      <img className="w-full mb-4"
        src="https://stytch.com/blog/wp-content/uploads/2022/01/How-a-refresh-token-is-generated-and-used-1-1024x539.png"
        alt="blog1"
      />
      <h1 className="text-lg text-Black font-semibold">
        What Are Access and Refresh Tokens?
      </h1>
      <div className="space-y-2 text-sm text-Slate/80">
        <p>
          We use tokens to authenticate users and authorize requests without
          keeping session data on the server. Tokens are data confirming a
          user’s identity and are analogous to digital signatures.
        </p>

        <h1 className="text-lg text-Black font-semibold">Access Token:</h1>

        <p>
          An access token (from an authorization server) allows temporary access
          to restricted resources such as APIs or websites. Generally, access
          tokens are valid for only a few minutes or hours, depending on the
          setting to safeguard the resource server. They also include security
          features like signatures.
        </p>

        <p>
          In this case, the client application can access the user’s resource
          using an access token. The authorization server issues an access token
          following successful user authentication and consent. The chance of
          the access token being compromised or stolen increases the longer it’s
          valid. While maintaining a positive user experience, pairing
          long-duration refresh tokens with short-duration access tokens
          improves security.
        </p>
        <h1 className="text-lg text-Black font-semibold">Refresh Token:</h1>
        <p>
          In OAuth 2.0 authorization frameworks, refresh tokens allow developers
          to manage users’ sessions across native, web-based, and single-page
          apps. Additionally, they allow users to log in and stay connected
          without providing their passwords for long periods. Further, they add
          a layer of security for sensitive data, improving the user experience.
          Refresh tokens can last from a few days to a few months. Refresh
          tokens by themselves don’t grant the user any access. To avoid
          needless re-authentication, they prolong the duration of the session.
        </p>

        <p>
          we discussed the differences between access tokens and refresh tokens.
          They reduce the load on the server since there is no need to store or
          query session data for each request. We can say a refresh token makes
          it possible to re-validate a user without requiring them to provide
          their login information repeatedly. If the refresh token is legitimate
          and asks for authorization to access confidential resources, the
          access token is re-issued. Further, when the authorization server
          notices a refresh token reuse, it instantly revokes the refresh token,
          and reauthentication is required. Finally, refresh token rotation is a
          security precaution provided to reduce the dangers that come with
          compromised refresh tokens.
        </p>
      </div>
    </div>
  );
};

export default Blog1;
