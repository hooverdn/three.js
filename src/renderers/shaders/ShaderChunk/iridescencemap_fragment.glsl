
#ifdef USE_IRIDESCENCEMAP

	vec4 texel = texture2D( iridescenceMap, vUv );
	vec4 iridescence2 = mapTexelToLinear( texel );
#endif
