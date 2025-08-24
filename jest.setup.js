import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/router', () => require('next-router-mock'))

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    button: 'button',
    section: 'section',
    h1: 'h1',
    h2: 'h2',
    p: 'p',
    span: 'span',
  },
  AnimatePresence: ({ children }) => children,
  useAnimation: () => ({}),
  useInView: () => true,
}))

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})