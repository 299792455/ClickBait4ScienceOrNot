import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { costOfClick, ENERGY_PER_CLICK } from '@/lib/constants'

// Chemin vers le fichier database.json
const dbPath = path.join(process.cwd(), 'src', 'data', 'db.json')

/**
 * GET /api/click
 * → Renvoie le total actuel sans rien modifier
 */
export async function GET() {
  // 1. Ouvre et lis le JSON
  const raw = await fs.readFile(dbPath, 'utf8')
  const db  = JSON.parse(raw)

  // 2. Renvoie les totaux actuels
  return NextResponse.json({
    totalclicks: db.totalclicks,
    totalcost:   db.totalcost,
    totalenergy: db.totalenergy,
  })
}

/**
 * POST /api/click
 * → Incrémente de 1 le compteur, ajoute le coût et l'énergie, puis renvoie les nouveaux totaux
 */
export async function POST() {
  // 1. Lire la base
  const raw = await fs.readFile(dbPath, 'utf8')
  const db  = JSON.parse(raw)

  // 2. Mettre à jour les champs
  db.totalclicks += 1
  db.totalcost   += costOfClick()
  db.totalenergy += ENERGY_PER_CLICK

  // 3. Réécrire le JSON mis à jour
  await fs.writeFile(dbPath, JSON.stringify(db), 'utf8')

  // 4. Retourner les valeurs mises à jour
  return NextResponse.json({
    totalclicks: db.totalclicks,
    totalcost:   db.totalcost,
    totalenergy: db.totalenergy,
  })
}


//tjrs en test