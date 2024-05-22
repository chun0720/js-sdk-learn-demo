import { bitable, CurrencyCode, FieldType, ICurrencyField, ICurrencyFieldMeta } from '@lark-base-open/js-sdk'; 
import { CURRENCY } from './const'; 

function LoadApp() {
  const [currencyFieldMetaList, setMetaList] = useState<ICurrencyFieldMeta[]>([]) 
  const [selectFieldId, setSelectFieldId] = useState<string>(); 
  const [currency, setCurrency] = useState<CurrencyCode>(); 
