// src/data/cities.js
// Representative list of UTC offsets with ISO country codes

export const CITIES = [
  // UTC-11
  { id: 'pago_pago', name: 'Pago Pago', tz: 'Pacific/Pago_Pago', country: 'AS', note: 'No DST' },

  // UTC-10
  { id: 'honolulu', name: 'Honolulu', tz: 'Pacific/Honolulu', country: 'US', note: 'No DST' },

  // UTC-9
  { id: 'adak', name: 'Adak', tz: 'America/Adak', country: 'US', note: 'DST, shifts between -10/-9' },
  { id: 'anchorage', name: 'Anchorage', tz: 'America/Anchorage', country: 'US', note: 'DST +1 hour' },

  // UTC-8
  { id: 'vancouver', name: 'Vancouver', tz: 'America/Vancouver', country: 'CA', note: 'DST +1 hour' },

  // UTC-7
  { id: 'phoenix', name: 'Phoenix', tz: 'America/Phoenix', country: 'US', note: 'No DST' },
  { id: 'denver', name: 'Denver', tz: 'America/Denver', country: 'US', note: 'DST +1 hour' },

  // UTC-6
  { id: 'mexico_city', name: 'Mexico City', tz: 'America/Mexico_City', country: 'MX', note: 'DST (rules may change)' },
  { id: 'guatemala_city', name: 'Guatemala City', tz: 'America/Guatemala', country: 'GT', note: 'No DST' },

  // UTC-5
  { id: 'new_york', name: 'New York', tz: 'America/New_York', country: 'US', note: 'DST +1 hour' },
  { id: 'bogota', name: 'Bogotá', tz: 'America/Bogota', country: 'CO', note: 'No DST' },

  // UTC-4
  { id: 'caracas', name: 'Caracas', tz: 'America/Caracas', country: 'VE', note: 'No DST' },
  { id: 'santiago', name: 'Santiago', tz: 'America/Santiago', country: 'CL', note: 'DST +1 hour (southern summer)' },

  // UTC-3
  { id: 'sao_paulo', name: 'São Paulo', tz: 'America/Sao_Paulo', country: 'BR', note: 'Currently no DST' },
  { id: 'buenos_aires', name: 'Buenos Aires', tz: 'America/Argentina/Buenos_Aires', country: 'AR', note: 'No DST' },

  // UTC-1
  { id: 'ponta_delgada', name: 'Ponta Delgada', tz: 'Atlantic/Azores', country: 'PT', note: 'DST +1 hour' },
  { id: 'praia', name: 'Praia', tz: 'Atlantic/Cape_Verde', country: 'CV', note: 'No DST' },

  // UTC±0
  { id: 'london', name: 'London', tz: 'Europe/London', country: 'GB', note: 'DST +1 hour' },
  { id: 'accra', name: 'Accra', tz: 'Africa/Accra', country: 'GH', note: 'No DST' },

  // UTC+1
  { id: 'berlin', name: 'Berlin', tz: 'Europe/Berlin', country: 'DE', note: 'DST +1 hour' },
  { id: 'lagos', name: 'Lagos', tz: 'Africa/Lagos', country: 'NG', note: 'No DST' },

  // UTC+2
  { id: 'paris', name: 'Paris', tz: 'Europe/Paris', country: 'FR', note: 'DST +1 hour' },
  { id: 'cairo', name: 'Cairo', tz: 'Africa/Cairo', country: 'EG', note: 'No DST currently' },

  // UTC+3
  { id: 'moscow', name: 'Moscow', tz: 'Europe/Moscow', country: 'RU', note: 'No DST' },

  // UTC+4
  { id: 'dubai', name: 'Dubai', tz: 'Asia/Dubai', country: 'AE', note: 'No DST' },

  // UTC+5
  { id: 'karachi', name: 'Karachi', tz: 'Asia/Karachi', country: 'PK', note: 'No DST' },

  // UTC+6
  { id: 'dhaka', name: 'Dhaka', tz: 'Asia/Dhaka', country: 'BD', note: 'No DST' },

  // UTC+7
  { id: 'ho_chi_minh', name: 'Ho Chi Minh City', tz: 'Asia/Ho_Chi_Minh', country: 'VN', note: 'No DST' },

  // UTC+8
  { id: 'beijing', name: 'Beijing', tz: 'Asia/Shanghai', country: 'CN', note: 'No DST' },

  // UTC+9
  { id: 'seoul', name: 'Seoul', tz: 'Asia/Seoul', country: 'KR', note: 'No DST' },

  // UTC+10
  { id: 'brisbane', name: 'Brisbane', tz: 'Australia/Brisbane', country: 'AU', note: 'No DST' },
  { id: 'sydney', name: 'Sydney', tz: 'Australia/Sydney', country: 'AU', note: 'DST +1 in summer' },

  // UTC+11
  { id: 'noumea', name: 'Nouméa', tz: 'Pacific/Noumea', country: 'NC', note: 'No DST' },
  { id: 'hobart', name: 'Hobart', tz: 'Australia/Hobart', country: 'AU', note: 'DST +1 in summer' },

  // UTC+12
  { id: 'suva', name: 'Suva', tz: 'Pacific/Fiji', country: 'FJ', note: 'DST +1 in summer' },
  { id: 'auckland', name: 'Auckland', tz: 'Pacific/Auckland', country: 'NZ', note: 'DST +1 in summer' },
];
