/** Énergie consommée par clic (en joules) */
export const ENERGY_PER_CLICK = 0.5;


/** Nombre de joules dans 1 kWh */
export const JOULES_PER_KWH = 3600000;


/** Prix de l’électricité (en $/kWh) */
export const PRICE_PER_KWH = 0.25;


/** Calcule le coût électrique d’un seul clic (en dollars). */
export function costOfClick() {
    return (ENERGY_PER_CLICK / JOULES_PER_KWH) * PRICE_PER_KWH;
}


/** Formatte un montant en dollars sur 8 décimales. */
export function formatDollars(amount: number) {
    return amount.toFixed(8);
}


/** Formatte un montant en centimes (1 € = 100 c€) sur 6 décimales. */
export function formatCents(amount: number) {
    return (amount * 100).toFixed(6);
}