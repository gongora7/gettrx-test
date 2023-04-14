<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_pfpzv' );

/** Database username */
define( 'DB_USER', 'wp_yaaff' );

/** Database password */
define( 'DB_PASSWORD', 'QR&3R~LjdS5&S$r9' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '43b0nzr3u2*AO~q~82_S62u[M4/P9vL]!9%TAOY*+[8S5R8lXx55u-d5hLVO:HxX');
define('SECURE_AUTH_KEY', '7sz/rB/87tfEG@LBnb-1]0#olf3wv+g[[!oX[c5~r0nB5hC8m#Y5o:5Na4t!9F8)');
define('LOGGED_IN_KEY', 'KGG4M;]syn6HW|L]9+55J&843]9Q2mIaH%68:933ge!/0)w80N&2#Sl0_h21#6)#');
define('NONCE_KEY', '1VxD/A;0f7IU-((6-lhP;41eQ_PS066v0C-X)5i[a/+1qG62TEJ!l~70AM!64MN4');
define('AUTH_SALT', 'k54w13h!8GAEH5fK(ioL|8]sWp02ZVq8/0a7yq!H@]3MHo7(1E|1F6*l2g;:k+xK');
define('SECURE_AUTH_SALT', 'u4)AIxE3|+S52I+Zr1xud@I0l6lKm&85][nw#8qp26yD!ZBP/8s~Re4_)X2bGQ_k');
define('LOGGED_IN_SALT', 'U9SE4*85LJ74czd1;D5#yXKXI29U*knNT77uR#ABu11oq79g_T#730N5qoY2d0[b');
define('NONCE_SALT', '0u64D/2]W&OWZ7lC9Q;1px8_/obDt8;M_(]v@P/:Q&~6fA**QkZ(zg~59x(K0(+7');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'qDrV4ypQ_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
