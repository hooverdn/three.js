import { MeshPhongMaterial } from './MeshPhongMaterial';

/**
 * @author hooverdn / http://github.com/hooverdn
 *
 * parameters = {
 *  gradientMap: new THREE.Texture( <Image> )
 * }
 */

function MeshIridescentMaterial( parameters ) {

	MeshPhongMaterial.call( this );

	this.defines = { 'IRIDESCENT': '' };

	this.type = 'MeshIridescentMaterial';

	this.setValues( parameters );

}

MeshIridescentMaterial.prototype = Object.create( MeshPhongMaterial.prototype );
MeshIridescentMaterial.prototype.constructor = MeshIridescentMaterial;

MeshIridescentMaterial.prototype.isMeshIridescentMaterial = true;

MeshIridescentMaterial.prototype.copy = function ( source ) {

	MeshPhongMaterial.prototype.copy.call( this, source );

	this.gradientMap = source.gradientMap;

	return this;

};


export { MeshIridescentMaterial };
