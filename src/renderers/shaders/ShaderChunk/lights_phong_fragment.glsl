BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;

#ifdef USE_IRIDESCENCEMAP
	material.iridescence = iridescence2.rgb;
material.iridescentness = max( iridescentness * iridescence2.a, 0.0001);
#elif defined(IRIDESCENT)
	material.iridescence = iridescence;
	material.iridescentness = iridescentness;
#endif
