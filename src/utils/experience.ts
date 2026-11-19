/**
 * Experience & tenure calculation utilities.
 * Started career as Web Developer at Slash Plus: March 2016.
 * Joined Outcode LLC: November 2020.
 */

export const CAREER_START_YEAR = 2016;
export const CAREER_START_MONTH = 3; // March 2016

export const OUTCODE_START_YEAR = 2020;
export const OUTCODE_START_MONTH = 11; // November 2020

/**
 * Calculates total years of experience dynamically from the career start year (Slash Plus, 2016).
 */
export function getYearsOfExperience(refDate: Date = new Date()): number {
  return Math.max(1, refDate.getFullYear() - CAREER_START_YEAR);
}

/**
 * Formatted experience string with plus, e.g. "10+"
 */
export function getExperienceBadge(refDate: Date = new Date()): string {
  return `${getYearsOfExperience(refDate)}+`;
}

/**
 * Formatted experience string with label, e.g. "10+ Years"
 */
export function getExperienceLabel(refDate: Date = new Date()): string {
  return `${getYearsOfExperience(refDate)}+ Years`;
}

/**
 * Calculates Outcode tenure in years dynamically.
 */
export function getOutcodeTenureYears(refDate: Date = new Date()): number {
  return Math.max(1, refDate.getFullYear() - OUTCODE_START_YEAR);
}

/**
 * Formatted Outcode tenure string, e.g. "6+ Years"
 */
export function getOutcodeTenureBadge(refDate: Date = new Date()): string {
  return `${getOutcodeTenureYears(refDate)}+ Years`;
}
