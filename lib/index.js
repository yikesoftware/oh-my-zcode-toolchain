// Public surface for the toolchain shim.
export const toolchainVersion = "0.3.2";

export async function ensureToolchain() {
  return { version: toolchainVersion, ready: true };
}
