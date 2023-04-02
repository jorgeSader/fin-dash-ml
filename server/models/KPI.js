import { Schema, model } from 'mongoose';

import { getCurrency, setCurrency } from '../helpers/getterSetter.js';

const KPISchema = new Schema({
  totalProfit: {
    type: Number,
    get: getCurrency,
    set: setCurrency,
  },
});

const KPI = model('KPI', KPISchema);

export default KPI;
