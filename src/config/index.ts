export const DEFAULT_PORT = 3001

export default () => ({
	PORT: process.env.PORT,
	ENVIRONMENT: process.env.ENVIRONMENT,
})
