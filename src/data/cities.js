// src/data/cities.js
// Representative list of UTC offsets with ISO country codes

export const CITIES = [
  // UTC-11
  { id: 'pago_pago', name: 'Pago Pago', tz: 'Pacific/Pago_Pago', country: 'AS', note: 'Always UTC-11' },

  // UTC-10
  { id: 'honolulu', name: 'Honolulu', tz: 'Pacific/Honolulu', country: 'US', note: 'Always UTC-10' },

  // UTC-9
  { id: 'adak', name: 'Adak', tz: 'America/Adak', country: 'US', note: 'Shifts between UTC-10 / UTC-9' },
  { id: 'anchorage', name: 'Anchorage', tz: 'America/Anchorage', country: 'US', note: 'Shifts between UTC-9 / UTC-8' },

  // UTC-8
  { id: 'vancouver', name: 'Vancouver', tz: 'America/Vancouver', country: 'CA', note: 'Shifts between UTC-8 / UTC-7' },

  // UTC-7
  { id: 'phoenix', name: 'Phoenix', tz: 'America/Phoenix', country: 'US', note: 'Always UTC-7' },

  // UTC-6
  { id: 'guatemala_city', name: 'Guatemala City', tz: 'America/Guatemala', country: 'GT', note: 'Always UTC-6' },

  // UTC-5
  { id: 'bogota', name: 'Bogotá', tz: 'America/Bogota', country: 'CO', note: 'Always UTC-5' },

  // UTC-4
  { id: 'caracas', name: 'Caracas', tz: 'America/Caracas', country: 'VE', note: 'Always UTC-4' },

  // UTC-3
  { id: 'sao_paulo', name: 'São Paulo', tz: 'America/Sao_Paulo', country: 'BR', note: 'Always UTC-3 (no DST currently)' },

  // UTC-1
  { id: 'praia', name: 'Praia', tz: 'Atlantic/Cape_Verde', country: 'CV', note: 'Always UTC-1' },

  // UTC±0
  { id: 'accra', name: 'Accra', tz: 'Africa/Accra', country: 'GH', note: 'Always UTC±0' },
  { id: 'london', name: 'London', tz: 'Europe/London', country: 'GB', note: 'Shifts between UTC±0 / UTC+1' },

  // UTC+1
  { id: 'lagos', name: 'Lagos', tz: 'Africa/Lagos', country: 'NG', note: 'Always UTC+1' },  
  { id: 'berlin', name: 'Berlin', tz: 'Europe/Berlin', country: 'DE', note: 'Shifts between UTC+1 / UTC+2' },

  // UTC+2
  { id: 'cairo', name: 'Cairo', tz: 'Africa/Cairo', country: 'EG', note: 'Always UTC+2' },

  // UTC+3
  { id: 'moscow', name: 'Moscow', tz: 'Europe/Moscow', country: 'RU', note: 'Always UTC+3' },

  // UTC+4
  { id: 'dubai', name: 'Dubai', tz: 'Asia/Dubai', country: 'AE', note: 'Always UTC+4' },

  // UTC+5
  { id: 'karachi', name: 'Karachi', tz: 'Asia/Karachi', country: 'PK', note: 'Always UTC+5' },

  // UTC+6
  { id: 'dhaka', name: 'Dhaka', tz: 'Asia/Dhaka', country: 'BD', note: 'Always UTC+6' },

  // UTC+7
  { id: 'ho_chi_minh', name: 'Ho Chi Minh City', tz: 'Asia/Ho_Chi_Minh', country: 'VN', note: 'Always UTC+7' },

  // UTC+8
  { id: 'beijing', name: 'Beijing', tz: 'Asia/Shanghai', country: 'CN', note: 'Always UTC+8' },

  // UTC+9
  { id: 'seoul', name: 'Seoul', tz: 'Asia/Seoul', country: 'KR', note: 'Always UTC+9' },

  // UTC+10
  { id: 'brisbane', name: 'Brisbane', tz: 'Australia/Brisbane', country: 'AU', note: 'Always UTC+10' },
  { id: 'sydney', name: 'Sydney', tz: 'Australia/Sydney', country: 'AU', note: 'Shifts between UTC+10 / UTC+11' },

  // UTC+11
  { id: 'noumea', name: 'Nouméa', tz: 'Pacific/Noumea', country: 'NC', note: 'Always UTC+11' },

  // UTC+12
  { id: 'suva', name: 'Suva', tz: 'Pacific/Fiji', country: 'FJ', note: 'Shifts between UTC+12 / UTC+13' },
  { id: 'auckland', name: 'Auckland', tz: 'Pacific/Auckland', country: 'NZ', note: 'Shifts between UTC+12 / UTC+13' },
];
