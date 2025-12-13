// src/data/cities.js
// Representative list of UTC offsets with ISO country codes

export const CITIES = [
  // UTC−11
  { id: 'pago_pago', name: 'Pago Pago', tz: 'Pacific/Pago_Pago', country: 'AS', note: 'No DST' },

  // UTC−10
  { id: 'honolulu', name: 'Honolulu', tz: 'Pacific/Honolulu', country: 'US', note: 'Hawaii, no DST' },

  // UTC−9
  { id: 'anchorage', name: 'Anchorage', tz: 'America/Anchorage', country: 'US', note: 'Alaska shifts +1 in DST' },

  // UTC−8
  { id: 'los_angeles', name: 'Los Angeles', tz: 'America/Los_Angeles', country: 'US', note: 'DST +1 hour' },

  // UTC−7
  { id: 'phoenix', name: 'Phoenix', tz: 'America/Phoenix', country: 'US', note: 'No DST' },

  // UTC−6
  { id: 'mexico_city', name: 'Mexico City', tz: 'America/Mexico_City', country: 'MX', note: 'DST +1 hour' },

  // UTC−5
  { id: 'new_york', name: 'New York', tz: 'America/New_York', country: 'US', note: 'DST +1 hour' },

  // UTC−4
  { id: 'caracas', name: 'Caracas', tz: 'America/Caracas', country: 'VE', note: 'No DST' },

  // UTC−3
  { id: 'sao_paulo', name: 'São Paulo', tz: 'America/Sao_Paulo', country: 'BR', note: 'Mostly no DST' },

  // UTC−1
  { id: 'ponta_delgada', name: 'Ponta Delgada', tz: 'Atlantic/Azores', country: 'PT', note: 'DST +1 hour' },

  // UTC±0
  { id: 'london', name: 'London', tz: 'Europe/London', country: 'GB', note: 'DST +1 hour in summer' },

  // UTC+1
  { id: 'berlin', name: 'Berlin', tz: 'Europe/Berlin', country: 'DE', note: 'DST +1 hour in summer' },

  // UTC+2
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
  { id: 'tokyo', name: 'Tokyo', tz: 'Asia/Tokyo', country: 'JP', note: 'No DST' },

  // UTC+10
  { id: 'sydney', name: 'Sydney', tz: 'Australia/Sydney', country: 'AU', note: 'DST +1 in summer' },

  // UTC+11
  { id: 'noumea', name: 'Nouméa', tz: 'Pacific/Noumea', country: 'NC', note: 'No DST' },

  // UTC+12
  { id: 'suva', name: 'Suva', tz: 'Pacific/Fiji', country: 'FJ', note: 'DST +1 in summer' },
  { id: 'auckland', name: 'Auckland', tz: 'Pacific/Auckland', country: 'NZ', note: 'DST +1 in summer' },
];
