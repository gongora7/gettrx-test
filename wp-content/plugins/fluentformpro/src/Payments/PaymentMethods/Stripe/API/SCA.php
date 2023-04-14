<?php

namespace FluentFormPro\Payments\PaymentMethods\Stripe\API;

use FluentFormPro\Payments\PaymentMethods\Stripe\StripeSettings;

if (!defined('ABSPATH')) {
	exit;
}

class SCA
{
	use RequestProcessor;

	public static function createPaymentIntent($args, $formId)
	{
		$argsDefault = [
			'confirmation_method' => 'manual',
			'confirm'             => 'true'
		];

		$args = wp_parse_args($args, $argsDefault);

		$secretKey = apply_filters('fluentform-payment_stripe_secret_key', StripeSettings::getSecretKey($formId), $formId);

		ApiRequest::set_secret_key($secretKey);

		$response = ApiRequest::request($args, 'payment_intents');

		return static::processResponse($response);
	}

	public static function retrievePaymentIntent($intentId, $args, $formId)
	{
		$secretKey = apply_filters('fluentform-payment_stripe_secret_key', StripeSettings::getSecretKey($formId), $formId);

		ApiRequest::set_secret_key($secretKey);

		$response =  ApiRequest::request($args, 'payment_intents/'.$intentId);

		return static::processResponse($response);
	}

	public static function confirmPayment($intendId, $args, $formId)
	{
		$secretKey = apply_filters('fluentform-payment_stripe_secret_key', StripeSettings::getSecretKey($formId), $formId);

		ApiRequest::set_secret_key($secretKey);

		$argsDefault = [
			'payment_method' => ''
		];

		$args = wp_parse_args($args, $argsDefault);

		$response = ApiRequest::request($args, 'payment_intents/' . $intendId . '/confirm');

		return static::processResponse($response);
	}
}
