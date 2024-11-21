import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Paradox(props) {
	const { nodes, materials } = useGLTF('/source/paradox.glb');
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane001_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.087, -0.072]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane002_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.175, -0.143]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane003_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.262, -0.215]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane004_0.geometry}
					material={materials.Root}
					rotation={[1.571, Math.PI / 9, -0.286]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane005_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.436, -0.358]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane006_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, Math.PI / 6, -0.429]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane007_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.611, -0.501]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane008_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.698, -0.572]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane009_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, Math.PI / 4, -0.644]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane010_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.873, -0.716]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane011_0.geometry}
					material={materials.Root}
					rotation={[1.571, 0.96, -0.787]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane012_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, Math.PI / 3, -0.859]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane013_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 1.134, -0.93]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane014_0.geometry}
					material={materials.Root}
					rotation={[1.571, 1.222, -1.002]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane015_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 1.309, -1.073]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane016_0.geometry}
					material={materials.Root}
					rotation={[1.571, 1.396, -1.145]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane017_0.geometry}
					material={materials.Root}
					rotation={[1.571, 1.484, -1.216]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane018_0.geometry}
					material={materials.Root}
					rotation={[0.283, Math.PI / 2, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane019_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, 1.484, 1.782]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane020_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, 1.396, 1.71]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane021_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 1.309, 1.639]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane022_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, 1.222, 1.567]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane023_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 1.134, 1.496]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane024_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, Math.PI / 3, 1.424]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane025_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, 0.96, 1.353]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane026_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 0.873, 1.281]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane027_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, Math.PI / 4, 1.21]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane028_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 0.698, 1.138]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane029_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 0.611, 1.066]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane030_0.geometry}
					material={materials.Root}
					rotation={[-1.571, Math.PI / 6, 0.995]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane031_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, 0.436, 0.923]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane032_0.geometry}
					material={materials.Root}
					rotation={[-1.571, Math.PI / 9, 0.852]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane033_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 0.262, 0.78]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane034_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 0.175, 0.709]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane035_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, 0.087, 0.637]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane036_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, 0, 0.565]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane038_0.geometry}
					material={materials.Root}
					rotation={[-1.571, -0.175, 0.422]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane039_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, -0.262, 0.351]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane040_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, -0.349, 0.279]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane041_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, -0.436, 0.208]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane042_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, -0.524, 0.136]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane043_0.geometry}
					material={materials.Root}
					rotation={[-1.571, -0.611, 0.065]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane044_0.geometry}
					material={materials.Root}
					rotation={[-1.571, -0.698, -0.007]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane045_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, -Math.PI / 4, -0.079]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane046_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, -0.873, -0.15]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane047_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, -0.96, -0.222]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane048_0.geometry}
					material={materials.Root}
					rotation={[-1.571, -1.047, -0.293]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane049_0.geometry}
					material={materials.Root}
					rotation={[-1.571, -1.134, -0.365]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane050_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, -1.222, -0.436]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane051_0.geometry}
					material={materials.Root}
					rotation={[-1.571, -1.309, -0.508]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane052_0.geometry}
					material={materials.Root}
					rotation={[-1.571, -1.396, -0.579]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane053_0.geometry}
					material={materials.Root}
					rotation={[-1.571, -1.484, -0.651]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane054_0.geometry}
					material={materials.Root}
					rotation={[-0.848, -Math.PI / 2, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane055_0.geometry}
					material={materials.Root}
					rotation={[1.571, -1.484, 2.347]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane056_0.geometry}
					material={materials.Root}
					rotation={[1.571, -1.396, 2.276]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane057_0.geometry}
					material={materials.Root}
					rotation={[1.571, -1.309, 2.204]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane058_0.geometry}
					material={materials.Root}
					rotation={[1.571, -1.222, 2.133]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane059_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, -1.134, 2.061]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane060_0.geometry}
					material={materials.Root}
					rotation={[1.571, -Math.PI / 3, 1.99]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane061_0.geometry}
					material={materials.Root}
					rotation={[1.571, -0.96, 1.918]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane062_0.geometry}
					material={materials.Root}
					rotation={[1.571, -0.873, 1.847]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane063_0.geometry}
					material={materials.Root}
					rotation={[1.571, -Math.PI / 4, 1.775]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane064_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, -0.698, 1.703]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane065_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, -0.611, 1.632]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane066_0.geometry}
					material={materials.Root}
					rotation={[1.571, -Math.PI / 6, 1.56]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane067_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, -0.436, 1.489]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane068_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, -0.349, 1.417]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane069_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, -0.262, 1.346]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane037_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, -0.087, 0.494]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane070_0.geometry}
					material={materials.Root}
					rotation={[1.571, -0.175, 1.274]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane071_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, -0.087, 1.203]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane072_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0, 1.131]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane073_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.087, 1.059]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane074_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.175, 0.988]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane075_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.262, 0.916]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane076_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, Math.PI / 9, 0.845]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane077_0.geometry}
					material={materials.Root}
					rotation={[1.571, 0.436, 0.773]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane078_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, Math.PI / 6, 0.702]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane079_0.geometry}
					material={materials.Root}
					rotation={[1.571, 0.611, 0.63]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane080_0.geometry}
					material={materials.Root}
					rotation={[1.571, 0.698, 0.558]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane081_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, Math.PI / 4, 0.487]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane082_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.873, 0.415]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane083_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 0.96, 0.344]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_0.geometry}
					material={materials.Root}
					rotation={[1.571, Math.PI / 3, 0.272]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane085_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 1.134, 0.201]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane086_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 1.222, 0.129]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane087_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 1.309, 0.058]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane088_0.geometry}
					material={materials.Root}
					rotation={[Math.PI / 2, 1.396, -0.014]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane089_0.geometry}
					material={materials.Root}
					rotation={[1.571, 1.484, -0.086]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane090_0.geometry}
					material={materials.Material}
					rotation={[1.414, Math.PI / 2, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane091_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 1.483, 2.913]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane092_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 1.396, 2.841]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane093_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 1.309, 2.77]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane094_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, 1.222, 2.698]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane095_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 1.134, 2.627]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane096_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, Math.PI / 3, 2.555]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane097_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, 0.96, 2.484]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane098_0.geometry}
					material={materials.Root}
					rotation={[-1.571, 0.873, 2.412]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane099_0.geometry}
					material={materials.Root}
					rotation={[-Math.PI / 2, Math.PI / 4, 2.34]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/source/paradox.glb');
