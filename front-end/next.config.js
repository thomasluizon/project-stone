/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   trailingSlash: true,
   compiler: {
      styledComponents: true,
   },
   optimizeFonts: false,
   images: {
      domains: [
         'st.depositphotos.com',
         'st2.depositphotos.com',
         'st3.depositphotos.com',
         'st4.depositphotos.com',
         'static3.depositphotos.com',
         'static7.depositphotos.com',
         'static5.depositphotos.com',
         'static6.depositphotos.com',
         'static8.depositphotos.com',
         'static4.depositphotos.com',
         'static9.depositphotos.com',
      ],
   },
};

module.exports = nextConfig;
