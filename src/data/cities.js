// src/data/cities.js
// Representative list of 24 UTC offsets with the most populous/famous city per offset (standard time).

export const CITIES = [
  // UTC−11
  { id: 'pago_pago', name: 'Pago Pago', tz: 'Pacific/Pago_Pago', country: 'American Samoa', note: 'No DST' },

  // UTC−10
  { id: 'honolulu', name: 'Honolulu', tz: 'Pacific/Honolulu', country: 'USA', note: 'Hawaii, no DST' },

  // UTC−9
  { id: 'anchorage', name: 'Anchorage', tz: 'America/Anchorage', country: 'USA', note: 'Alaska shifts +1 in DST' },

  // UTC−8
  { id: 'los_angeles', name: 'Los Angeles', tz: 'America/Los_Angeles', country: 'USA', note: 'DST +1 hour' },

  // UTC−7
  { id: 'phoenix', name: 'Phoenix', tz: 'America/Phoenix', country: 'USA', note: 'No DST; stays UTC-7' },

  // UTC−6
  { id: 'mexico_city', name: 'Mexico City', tz: 'America/Mexico_City', country: 'Mexico', note: 'DST +1 hour' },

  // UTC−5
  { id: 'new_york', name: 'New York', tz: 'America/New_York', country: 'USA', note: 'DST +1 hour' },

  // UTC−4
  { id: 'caracas', name: 'Caracas', tz: 'America/Caracas', country: 'Venezuela', note: 'No DST; Santiago shifts in summer' },

  // UTC−3
  { id: 'sao_paulo', name: 'São Paulo', tz: 'America/Sao_Paulo', country: 'Brazil', note: 'Brazil mostly no DST' },

  // UTC−1
  { id: 'ponta_delgada', name: 'Ponta Delgada', tz: 'Atlantic/Azores', country: 'Portugal', note: 'DST +1 hour' },

  // UTC±0
  { id: 'london', name: 'London', tz: 'Europe/London', country: 'UK', note: 'DST +1 hour in summer' },

  // UTC+1
  { id: 'berlin', name: 'Berlin', tz: 'Europe/Berlin', country: 'Germany', note: 'DST +1 hour in summer' },

  // UTC+2
  { id: 'cairo', name: 'Cairo', tz: 'Africa/Cairo', country: 'Egypt', note: 'No DST currently' },

  // UTC+3
  { id: 'moscow', name: 'Moscow', tz: 'Europe/Moscow', country: 'Russia', note: 'No DST' },

  // UTC+4
  { id: 'dubai', name: 'Dubai', tz: 'Asia/Dubai', country: 'UAE', note: 'No DST' },

  // UTC+5
  { id: 'karachi', name: 'Karachi', tz: 'Asia/Karachi', country: 'Pakistan', note: 'No DST' },

  // UTC+6
  { id: 'dhaka', name: 'Dhaka', tz: 'Asia/Dhaka', country: 'Bangladesh', note: 'No DST' },

  // UTC+7
  { id: 'ho_chi_minh', name: 'Ho Chi Minh City', tz: 'Asia/Ho_Chi_Minh', country: 'Vietnam', note: 'No DST' },

  // UTC+8
  { id: 'beijing', name: 'Beijing', tz: 'Asia/Shanghai', country: 'China', note: 'No DST' },

  // UTC+9
  { id: 'tokyo', name: 'Tokyo', tz: 'Asia/Tokyo', country: 'Japan', note: 'No DST' },

  // UTC+10
  { id: 'sydney', name: 'Sydney', tz: 'Australia/Sydney', country: 'Australia', note: 'DST +1 in summer' },

  // UTC+11
  { id: 'noumea', name: 'Nouméa', tz: 'Pacific/Noumea', country: 'New Caledonia', note: 'No DST' },

  // UTC+12
  { id: 'suva', name: 'Suva', tz: 'Pacific/Fiji', country: 'Fiji', note: 'DST +1 in summer' },
  { id: 'auckland', name: 'Auckland', tz: 'Pacific/Auckland', country: 'New Zealand', note: 'DST +1 in summer' },
];
