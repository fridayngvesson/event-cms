// schemas/index.js
import { blockContentType } from './blockContentType'
import { eventType } from './eventType'
import hero from './hero' // Importerar schemas

export const schema = {
  types: [blockContentType, eventType, hero], // Lägg till även här
}
