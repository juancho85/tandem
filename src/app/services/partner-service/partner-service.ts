import {Injectable} from 'angular2/core';
import {PartnerFilterCriteria} from './partner-filter-criteria'
import {MOCK_PARTNERS_OFFER_ENGLISH, MOCK_PARTNERS_OFFER_FRENCH, MOCK_PARTNERS_OFFER_GERMAN, MOCK_PARTNERS_OFFER_ITALIAN} from './mock-partners'


@Injectable()
export class PartnerService {

    getPartners(criteria:PartnerFilterCriteria) {
        if(criteria.partnerOfferedLanguage === 'French'){
            return Promise.resolve(MOCK_PARTNERS_OFFER_FRENCH);
        }else if (criteria.partnerOfferedLanguage === 'German'){
            return Promise.resolve(MOCK_PARTNERS_OFFER_GERMAN);
        }else if (criteria.partnerOfferedLanguage === 'English'){
            return Promise.resolve(MOCK_PARTNERS_OFFER_ENGLISH);
        }else{
            return Promise.resolve(MOCK_PARTNERS_OFFER_ITALIAN);
        }

    }
    constructor() {}

}
