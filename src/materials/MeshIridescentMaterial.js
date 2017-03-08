import { MeshPhongMaterial } from './MeshPhongMaterial';

/**
 * @author hooverdn / http://github.com/hooverdn
 *
 * parameters = {
 *  iridescence: <hex>,
 *  iridescentness: <float>,
 *  iridescenceMap: new THREE.Texture( <Image> )
 * }
 */

function MeshIridescentMaterial( parameters ) {

	MeshPhongMaterial.call( this );

	this.defines = { 'IRIDESCENT': '' };

	this.type = 'MeshIridescentMaterial';

    // no specular reflection by default
    this.specular = new THREE.Color(0x000000);
    this.shininess = 0;
    
	this.iridescence = new THREE.Color(0x000000);
    this.iridescentness = 0;
    
    this.iridescenceMap = null;
	this.setValues( parameters );
}

MeshIridescentMaterial.prototype = Object.create( MeshPhongMaterial.prototype );
MeshIridescentMaterial.prototype.constructor = MeshIridescentMaterial;

MeshIridescentMaterial.prototype.isMeshIridescentMaterial = true;

MeshIridescentMaterial.prototype.copy = function ( source ) {

	MeshPhongMaterial.prototype.copy.call( this, source );

    this.iridescence.copy(source.iridescence);
    this.iridescentness.copy(source.iridescentness);
    
	return this;

};


export { MeshIridescentMaterial };
