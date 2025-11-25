export async function validateCredentials(username: string, password: string): Promise<boolean> {
  // Simulación simple de validación. En el futuro reemplazar por llamada a API.
  return username === 'admin' && password === 'admin';
}
