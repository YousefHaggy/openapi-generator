/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
    CategoryToJSONTyped,
} from './Category';
import type { DeploymentRequestStatus } from './DeploymentRequestStatus';
import {
    DeploymentRequestStatusFromJSON,
    DeploymentRequestStatusFromJSONTyped,
    DeploymentRequestStatusToJSON,
    DeploymentRequestStatusToJSONTyped,
} from './DeploymentRequestStatus';
import type { Tag } from './Tag';
import {
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
    TagToJSONTyped,
} from './Tag';
import type { WarningCode } from './WarningCode';
import {
    WarningCodeFromJSON,
    WarningCodeFromJSONTyped,
    WarningCodeToJSON,
    WarningCodeToJSONTyped,
} from './WarningCode';

/**
 * A pet for sale in the pet store
 * @export
 * @interface Pet
 */
export interface Pet {
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    friendId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof Pet
     */
    otherFriendIds: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    friendAge: number;
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    age: number;
    /**
     * 
     * @type {boolean}
     * @memberof Pet
     */
    isHappy: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Pet
     */
    isTall: boolean;
    /**
     * 
     * @type {Category}
     * @memberof Pet
     */
    category: Category;
    /**
     * 
     * @type {Category}
     * @memberof Pet
     */
    optionalCategory?: Category;
    /**
     * 
     * @type {string}
     * @memberof Pet
     */
    name: string;
    /**
     * 
     * @type {Array<Category>}
     * @memberof Pet
     */
    _entries?: Array<Category>;
    /**
     * 
     * @type {string}
     * @memberof Pet
     */
    surname?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Pet
     */
    photoUrls: Array<string>;
    /**
     * 
     * @type {WarningCode}
     * @memberof Pet
     */
    warningStatus: WarningCode;
    /**
     * 
     * @type {DeploymentRequestStatus}
     * @memberof Pet
     */
    depStatus?: DeploymentRequestStatus;
    /**
     * 
     * @type {DeploymentRequestStatus}
     * @memberof Pet
     */
    alternateStatus: DeploymentRequestStatus;
    /**
     * 
     * @type {Array<DeploymentRequestStatus>}
     * @memberof Pet
     */
    otherDepStatuses: Array<DeploymentRequestStatus>;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Pet
     */
    tags: Array<Tag>;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Pet
     */
    optionalTags?: Array<Tag>;
    /**
     * pet status in the store
     * @type {string}
     * @memberof Pet
     */
    status: PetStatusEnum;
    /**
     * An array of all 15-minute time slots in 24 hours.
     * @type {Array<Array<number | null>>}
     * @memberof Pet
     */
    regions?: Array<Array<number | null>>;
}


/**
 * @export
 */
export const PetStatusEnum = {
    Available: 'available',
    Pending: 'pending',
    Sold: 'sold'
} as const;
export type PetStatusEnum = typeof PetStatusEnum[keyof typeof PetStatusEnum];


/**
 * Check if a given object implements the Pet interface.
 */
export function instanceOfPet(value: object): value is Pet {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('otherFriendIds' in value) || value['otherFriendIds'] === undefined) return false;
    if (!('friendAge' in value) || value['friendAge'] === undefined) return false;
    if (!('age' in value) || value['age'] === undefined) return false;
    if (!('isHappy' in value) || value['isHappy'] === undefined) return false;
    if (!('isTall' in value) || value['isTall'] === undefined) return false;
    if (!('category' in value) || value['category'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('photoUrls' in value) || value['photoUrls'] === undefined) return false;
    if (!('warningStatus' in value) || value['warningStatus'] === undefined) return false;
    if (!('alternateStatus' in value) || value['alternateStatus'] === undefined) return false;
    if (!('otherDepStatuses' in value) || value['otherDepStatuses'] === undefined) return false;
    if (!('tags' in value) || value['tags'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function PetFromJSON(json: any): Pet {
    return PetFromJSONTyped(json, false);
}

export function PetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pet {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'friendId': json['friendId'] == null ? undefined : json['friendId'],
        'otherFriendIds': json['otherFriendIds'],
        'friendAge': json['friendAge'],
        'age': json['age'],
        'isHappy': json['isHappy'],
        'isTall': json['isTall'],
        'category': CategoryFromJSON(json['category']),
        'optionalCategory': json['optionalCategory'] == null ? undefined : CategoryFromJSON(json['optionalCategory']),
        'name': json['name'],
        '_entries': json['entries'] == null ? undefined : ((json['entries'] as Array<any>).map(CategoryFromJSON)),
        'surname': json['surname'] == null ? undefined : json['surname'],
        'photoUrls': json['photoUrls'],
        'warningStatus': WarningCodeFromJSON(json['warningStatus']),
        'depStatus': json['depStatus'] == null ? undefined : DeploymentRequestStatusFromJSON(json['depStatus']),
        'alternateStatus': DeploymentRequestStatusFromJSON(json['alternateStatus']),
        'otherDepStatuses': ((json['otherDepStatuses'] as Array<any>).map(DeploymentRequestStatusFromJSON)),
        'tags': ((json['tags'] as Array<any>).map(TagFromJSON)),
        'optionalTags': json['optionalTags'] == null ? undefined : ((json['optionalTags'] as Array<any>).map(TagFromJSON)),
        'status': json['status'],
        'regions': json['regions'] == null ? undefined : json['regions'],
    };
}

export function PetToJSON(json: any): Pet {
    return PetToJSONTyped(json, false);
}

export function PetToJSONTyped(value?: Pet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'friendId': value['friendId'],
        'otherFriendIds': value['otherFriendIds'],
        'friendAge': value['friendAge'],
        'age': value['age'],
        'isHappy': value['isHappy'],
        'isTall': value['isTall'],
        'category': CategoryToJSON(value['category']),
        'optionalCategory': CategoryToJSON(value['optionalCategory']),
        'name': value['name'],
        'entries': value['_entries'] == null ? undefined : ((value['_entries'] as Array<any>).map(CategoryToJSON)),
        'surname': value['surname'],
        'photoUrls': value['photoUrls'],
        'warningStatus': WarningCodeToJSON(value['warningStatus']),
        'depStatus': DeploymentRequestStatusToJSON(value['depStatus']),
        'alternateStatus': DeploymentRequestStatusToJSON(value['alternateStatus']),
        'otherDepStatuses': ((value['otherDepStatuses'] as Array<any>).map(DeploymentRequestStatusToJSON)),
        'tags': ((value['tags'] as Array<any>).map(TagToJSON)),
        'optionalTags': value['optionalTags'] == null ? undefined : ((value['optionalTags'] as Array<any>).map(TagToJSON)),
        'status': value['status'],
        'regions': value['regions'],
    };
}

