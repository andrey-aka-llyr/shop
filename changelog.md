# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 1.4.1 - 2018-06-04
### Added
- Admin module
- Login service (via local storage)
- Login component
- CanActivate guard for Admin module + CanActivateChild guard for its child navigation
- Return URL support via query parameters

## 1.4.0 - 2018-05-31
### Added
- Navigation menu
- Routing
- Cart Item Count form (for buying products / changing count)
- Comments (via secondary router oulet)

### Changed
- Core Demo component moved to Demo module
- Single product query (via promise)
- Product module transformed to feature module (with routing)
- Cart module transformed to feature module (with nested routing)

## 1.3.0 - 2018-05-29
### Added
- Category Display pipe
- Order By pipe
- Toolkit module
- Category display for products (with 'uppercase' pipe)
- Cart items sorting
- Total price per cart item

### Changed
- Price formatting (via 'currency' pipe)
- Products query (via 'async' pipe)

## 1.2.0 - 2018-05-28
### Added
- Local Storage service
- Config Options service
- Constants service
- Generator service
- Selector directive
- Core module
- Core Demo component

### Changed
- Total products statistics for cart

## 1.1.0 - 2018-05-25
### Added
- Cart item operations (change count, delete)
- Visual effects (cart item hover, availability via name color)

### Changed
- Component structure (separation on modules)

## 1.0.0 - 2018-05-24
### Added
- Shop project
- Product display
- Cart with product addition support 