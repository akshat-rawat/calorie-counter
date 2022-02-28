import * as faker from 'faker';

export default class FoodEntryService {
    static fetchFoodEntries = async ({minDate='2022-01-01', maxDate='2022-01-29'}) => {
        if (Date(minDate) > Date(maxDate)) throw new Error("Enter a Valid filter");
        const entries = [];
        await new Promise((resolve => setTimeout(resolve, 2000)));
        for (let i = 0; i < 5; i++) {
            entries.push({
                id: Date.now(),
                foodName: faker.animal.fish(),
                date: faker.date.between(minDate, maxDate),
                price: Number(faker.commerce.price(10, 200)),
                calories: Number(faker.commerce.price(50, 1500)),
                isCalorieLimitReached: Math.random() < 0.3,
                isPriceLimitReached: Math.random() > 0.7
            });
            await new Promise((resolve => setTimeout(resolve, 1)));
        }
        return entries;
    }
}