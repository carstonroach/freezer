export function suggestFood(text){
const value=text.trim(); const match=value.match(/^(\d+(?:[./]\d+)?\s*(?:pounds?|lbs?|kg|g|oz|ounces?|portions?|servings?|bags?|containers?|pieces?|fillets?|packs?)?)\s+(?:of\s+)?(.+)$/i);
const name=match?match[2]:value, quantity=match?match[1]:'';
const rules=[['Leftovers',/\b(leftovers?|lasagna|soup|stew|curry|chili|casserole|cooked|prepared|bolognese|meal|pizza)\b/i],['Seafood',/\b(salmon|shrimp|prawns?|cod|tuna|fish|seafood|scallops?|lobster|crab|halibut|tilapia|trout|mussels?|clams?)\b/i],['Poultry',/\b(chicken|turkey|duck|poultry|cornish hen)\b/i],['Meat',/\b(beef|steak|pork|lamb|sausage|bacon|meat|brisket|venison|ribs?|hamburger)\b/i],['Vegetables',/\b(vegetables?|broccoli|peas|corn|spinach|kale|carrots?|beans|cauliflower|edamame)\b/i],['Bread & Baking',/\b(bread|dough|croissants?|bagels?|muffins?|pastry|pastries|rolls?|buns?)\b/i]];
return {name,quantity,category:rules.find(([,pattern])=>pattern.test(name))?.[0]||'Other'};
}
export function foodUrl(data){
const url=new URL('https://github.com/carstonroach/freezer/issues/new');
url.searchParams.set('template','food.yml');
for(const [key,value]of Object.entries({title:'[Food] '+data.name,category:data.category,quantity:data.quantity,location:data.location,frozen:data.frozen,notes:data.notes}))if(value)url.searchParams.set(key,value);
return url.href;
}
