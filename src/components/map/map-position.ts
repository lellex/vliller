/**
 * Helper to manage Google LatLng class easily.
 */
export class MapPosition {
    constructor(
        public latitude: number,
        public longitude: number
    ) {}

    static fromLatLng(latlng: any): MapPosition {
        return new MapPosition(
            latlng.lat,
            latlng.lng
        );
    }

    static fromCoordinates(coordinates: any): MapPosition {
        return new MapPosition(
            coordinates.latitude,
            coordinates.longitude
        );
    }

    public toLatLng(): any {
        return {
            lat: this.latitude,
            lng: this.longitude
        };
    }
}