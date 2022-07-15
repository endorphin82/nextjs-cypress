/** @type {import('next').NextConfig} */

const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
    PHASE_TEST
} = require('next/constants')

const nextConfig = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isTesting = phase === PHASE_TEST

    console.log(`isDev:${isDev}  isProd:${isProd}   isTesting:${isTesting}`)
    const env = {
        PORT: (() => {
            if (isDev) return process.env.PORT
            if (isProd) {
                return process.env.PORT
            }
            if (isTesting) return process.env.PORT
            return 'RESTURL_SPEAKERS:not (isDev,isProd && !isTesting,isProd && isTesting)'
        })()
    }
    console.log({env})
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    return {
        reactStrictMode: true,
        swcMinify: true,
        env
    }
}

module.exports = nextConfig
