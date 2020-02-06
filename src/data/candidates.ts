import { Filter, RoomFloor, RoomCount, ContractType } from '../filter';

/**
 * 월세 한도 (단위 만원)
 */
const rentBudget = 50;

/**
 * 보증금 한도 (단위 만원)
 */
const depositBudget = 3000;

const commonFilter: Omit<Filter, 'bounds' | 'id'> = {
    priceRange: {
        rent: { max: rentBudget * 10000 },
        deposit: { max: depositBudget * 10000 },
        shouldIncludeMaintenance: true,
    },
    buildingTypes: [],
    roomFloors: [RoomFloor.lower, RoomFloor.higher],
    roomCounts: [RoomCount.oneRoom],
    contractTypes: [ContractType.rent],
    shouldIncludeHalfUndergrounds: false,
    shouldIncludeLofts: true,
    shouldIncludeRooftops: true,
};

const candidates: Filter[] = [
    {
        id: '양재 ~ 양시숲',
        ...commonFilter,
        bounds: {
            max: { lat: 37.4694356, lng: 127.0284983 },
            min: { lat: 37.486595, lng: 127.055764 },
        },
    },
];

export default candidates;
