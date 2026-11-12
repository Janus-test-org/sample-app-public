// The whole application: one function, so that a test has something to check.

export function greeting(name: string): string {
  const trimmed = name.trim();
  if (trimmed === "") {
    return "Hello!";
  }
  return `Hello, ${trimmed}!`;
}
