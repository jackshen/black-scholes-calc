import { erf } from "mathjs";

/**
 * Normal cumulative distribution function
 * @param {number} x
 * @param {number} [mu=0] - mean
 * @param {number} [sigma=1] - standard deviation
 */
const normCdf = (x, mu = 0, sigma = 1) => 0.5 * (1 - erf((mu - x) / (Math.sqrt(2) * sigma)));

/**
 * Black-Scholes-Merton formula for European call options
 * @param {number} S underlying spot price
 * @param {number} K option strike price
 * @param {number} sigma option implied volatility
 * @param {number} r risk-free interest rate
 * @param {number} t option term in years
 * @param {number} [d=0] underlying dividend yield
 */
const blackScholesCall = (S, K, sigma, r, t, d = 0) => {
  // Parameter for the option's delta
  const d1 = (Math.log(S / K) + (r - d + Math.pow(sigma, 2) / 2) * t) / (sigma * Math.sqrt(t));

  // Parameter for the probability that the call option will be exercised
  const d2 = d1 - sigma * Math.sqrt(t);

  return S * Math.exp(-d * t) * normCdf(d1) - K * Math.exp(-r * t) * normCdf(d2);
};

/**
 * Black-Scholes-Merton formula for European put options
 * @param {number} S underlying spot price
 * @param {number} K option strike price
 * @param {number} sigma option implied volatility
 * @param {number} r risk-free interest rate
 * @param {number} t option term in years
 * @param {number} [d=0] underlying dividend yield
 */
const blackScholesPut = (S, K, sigma, r, t, d = 0) => {
  // Parameter for the option's delta
  const d1 = (Math.log(S / K) + (r - d + Math.pow(sigma, 2) / 2) * t) / (sigma * Math.sqrt(t));

  // Parameter for the probability that the call option will be exercised
  const d2 = d1 - sigma * Math.sqrt(t);

  return K * Math.exp(-r * t) * normCdf(-d2) - S * Math.exp(-d * t) * normCdf(-d1);
};

/**
 * Black-Scholes-Merton formula for call warrants
 * @param {number} S underlying spot price
 * @param {number} K option strike price
 * @param {number} sigma option implied volatility
 * @param {number} r risk-free interest rate
 * @param {number} t option term in years
 * @param {number} [q=1] warrant:shares conversion ratio
 */
const blackScholesWarrantCall = (S, K, sigma, r, t, q = 1) => {
  // Parameter for the option's delta
  const d1 = (Math.log(S / K) + (r + Math.pow(sigma, 2) / 2) * t) / (sigma * Math.sqrt(t));

  // Parameter for the probability that the call option will be exercised
  const d2 = d1 - sigma * Math.sqrt(t);

  return (S * normCdf(d1) - K * Math.exp(-r * t) * normCdf(d2)) / q;
};

export { blackScholesCall, blackScholesPut, blackScholesWarrantCall };
export default blackScholesCall;
