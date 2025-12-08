/**
 * Income period options for Box 1 calculator
 */
export const INCOME_PERIODS = [
  { value: 'yearly', label: 'Yearly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'daily', label: 'Daily' },
  { value: 'hourly', label: 'Hourly' },
]

/**
 * 30% ruling category options
 * - researchWorker: Scientific research workers
 * - youngProfessional: Young employees with Master's degree
 * - other: Other cases
 */
export const RULING_30_CATEGORIES = [
  { value: 'researchWorker', label: 'Scientific research' },
  { value: 'youngProfessional', label: "Young employee with Master's" },
  { value: 'other', label: 'Other' },
]

/**
 * Conversion factors for different periods to yearly
 * Based on dutch-tax-income-calculator constants:
 * - 52 working weeks
 * - 260 working days (52 * 5)
 */
export const PERIOD_MULTIPLIERS = {
  yearly: 1,
  monthly: 12,
  weekly: 52,
  daily: 260,
  hourly: null, // Calculated based on hours per week: hoursPerWeek * 52
}

/**
 * Default empty form values for Box 1 income tax calculator
 */
export const BOX1_EMPTY_FORM = {
  grossIncome: '',
  period: 'yearly',
  hoursPerWeek: 40,
  holidayAllowanceIncluded: true,
  older: false,
  ruling30Enabled: false,
  ruling30Category: 'other',
  socialSecurity: true,
}
