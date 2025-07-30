# dmcgill50

This project hosts the source for https://davidmcgill.tech.

Recent updates removed leftover merge conflict markers that appeared on the live homepage. Pull the latest version to ensure they are gone.

## Custom domain configuration

If HTTPS fails with a `NET::ERR_CERT_COMMON_NAME_INVALID` error, verify the following:

1. `CNAME` file contains only `davidmcgill.tech`.
2. GitHub Pages settings list `davidmcgill.tech` as the custom domain and HTTPS is enforced.
3. DNS provider has these A records for `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   and a CNAME for `www` pointing to `davidmcgill.tech`.
