export class Configuration {
    constructor(
        public userId: number,
        public login: string,
        public email: string,
        public firstName?: string,
        public lastName?: string
    ) {
    }
}
