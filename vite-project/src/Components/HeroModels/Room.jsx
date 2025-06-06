import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/isometric_room_house_game-ready.glb');
  useEffect(() => {
    // Проверяем загрузились ли основные материалы
    if (nodes && materials) {
      props.onLoaded();
    }
  }, [nodes, materials])
  return (
    <group {...props} dispose={null}>
      <group position={[-2.163, 1.375, 1.333]} scale={0.692}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.BlackPlasticTV} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.TVScreenMovie} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.PureMetal} position={[0.033, 0.367, 0]} />
      </group>
      <group position={[-2.153, 1.587, -2.387]} rotation={[0, 0.168, 0]} scale={0.509}>
        <mesh geometry={nodes.Object_9.geometry} material={materials.BlackPlasticTV} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.MonitorWallpaper} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.PureMetal} />
      </group>
      <group position={[0.271, 1.587, -2.374]} rotation={[0, -0.153, 0]} scale={0.509}>
        <mesh geometry={nodes.Object_14.geometry} material={materials.BlackPlasticTV} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.ScreenOff} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.MouseLit} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-0.737, 1.587, -2.204]} rotation={[0, 0.723, 0]} scale={0.409}>
        <mesh geometry={nodes.Object_20.geometry} material={materials.BlackPlasticTV} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.MousePad} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.ScreenOff} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.MouseLit} />
      </group>
      <group position={[0.675, 0.589, -2.172]} scale={0.422}>
        <mesh geometry={nodes.Object_25.geometry} material={materials.MetalCase} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.CaseRgb} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.BlackPlasticTV} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.material_0} />
      </group>
      <group position={[-1.39, 0.608, -2.06]} scale={0.396}>
        <mesh geometry={nodes.Object_31.geometry} material={materials.MetalCase} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.BlackPlasticTV} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.BlackPlasticTV} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.RGBFans} />
      </group>
      <group position={[-2.779, 3.044, 1.402]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.198}>
        <mesh geometry={nodes.Object_41.geometry} material={materials.WatchHold} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.WatchFace} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.WaatchNumbers} rotation={[0, -0.262, 0]} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.WatchHold} rotation={[0, 0.117, 0]} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.WatchHold} rotation={[-Math.PI, 1.424, -Math.PI]} scale={1.293} />
      </group>
      <group position={[2.073, 0.377, 1.402]} scale={0.763}>
        <mesh geometry={nodes.Object_52.geometry} material={materials.Armchair} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.material_0} />
      </group>
      <group position={[0.807, 1.239, -2.01]} scale={0.072}>
        <mesh geometry={nodes.Object_56.geometry} material={materials.Mouse} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.MouseLit} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.Mouse} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.MouseLit} />
      </group>
      <group position={[0.826, 1.348, -2.426]} rotation={[-1.663, 0.026, -0.275]} scale={0.079}>
        <mesh geometry={nodes.Object_66.geometry} material={materials.White} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.YellowSpeakerLit} />
      </group>
      <group position={[-0.299, 1.348, -2.551]} rotation={[-1.662, -0.03, 0.314]} scale={0.079}>
        <mesh geometry={nodes.Object_69.geometry} material={materials.White} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.YellowSpeakerLit} />
      </group>
      <group position={[-1.486, 1.348, -2.419]} rotation={[-1.663, 0.026, -0.275]} scale={0.079}>
        <mesh geometry={nodes.Object_72.geometry} material={materials.White} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.YellowSpeakerLit} />
      </group>
      <group position={[-2.579, 1.348, -2.158]} rotation={[-1.639, -0.067, 0.77]} scale={0.079}>
        <mesh geometry={nodes.Object_75.geometry} material={materials.White} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.YellowSpeakerLit} />
      </group>
      <group position={[2.2, 0.774, -0.204]} rotation={[0, 0.017, 0]} scale={0.226}>
        <mesh geometry={nodes.Object_78.geometry} material={materials.Armchair} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.WoodenShelves} />
      </group>
      <group position={[-2.358, 2.505, 2.635]} rotation={[Math.PI / 2, 0, 0]} scale={0.191}>
        <mesh geometry={nodes.Object_82.geometry} material={materials.BookGreen} />
        <mesh geometry={nodes.Object_83.geometry} material={materials.BookBlack2} />
        <mesh geometry={nodes.Object_84.geometry} material={materials.BookYellow} />
        <mesh geometry={nodes.Object_85.geometry} material={materials.BookPages} />
      </group>
      <group position={[-1.977, 0.868, 1.251]} rotation={[Math.PI / 2, 0, 0]} scale={0.191}>
        <mesh geometry={nodes.Object_89.geometry} material={materials.BookBlue} />
        <mesh geometry={nodes.Object_90.geometry} material={materials.BookBlue2} />
        <mesh geometry={nodes.Object_91.geometry} material={materials.BookPages} />
        <mesh geometry={nodes.Object_92.geometry} material={materials.BookYellow} />
      </group>
      <group position={[1.97, 0.203, -2.431]} rotation={[-Math.PI, 0.207, -Math.PI]} scale={0.191}>
        <mesh geometry={nodes.Object_96.geometry} material={materials.Slippers} />
        <mesh geometry={nodes.Object_97.geometry} material={materials.SlippersYellow} />
      </group>
      <group position={[2.169, 0.827, -0.228]} scale={0.134}>
        <mesh geometry={nodes.Object_99.geometry} material={materials.White} />
        <mesh geometry={nodes.Object_100.geometry} material={materials.MousePad} />
      </group>
      <group position={[-1.432, 1.264, -2.041]} rotation={[0, -0.967, 0]} scale={0.072}>
        <group position={[0, 0.222, -0.383]}>
          <mesh geometry={nodes.Object_107.geometry} material={materials.Mouse} />
          <mesh geometry={nodes.Object_108.geometry} material={materials.MouseLit} />
        </group>
        <mesh geometry={nodes.Object_104.geometry} material={materials.Mouse} />
        <mesh geometry={nodes.Object_105.geometry} material={materials.MouseLit} />
      </group>
      <group position={[-1.39, 0.629, -1.792]} rotation={[Math.PI / 2, 0, 0]} scale={0.093}>
        <mesh geometry={nodes.Object_112.geometry} material={materials.BlackPlasticTV} />
        <mesh geometry={nodes.Object_113.geometry} material={materials.RGBFans} />
      </group>
      <group position={[-2.121, 1.253, -2.001]} rotation={[0, -0.268, 0]} scale={0.151}>
        <mesh geometry={nodes.Object_129.geometry} material={materials.BookBlack} />
        <mesh geometry={nodes.Object_130.geometry} material={materials.CaseRgb} />
      </group>
      <group position={[-2.326, 1.254, -2.136]} rotation={[0, -0.268, 0]} scale={0.151}>
        <mesh geometry={nodes.Object_132.geometry} material={materials.CaseRgb} />
        <mesh geometry={nodes.Object_133.geometry} material={materials.BookBlack} />
      </group>
      <group position={[-1.813, 1.254, -1.994]} rotation={[0, -0.268, 0]} scale={0.151}>
        <mesh geometry={nodes.Object_135.geometry} material={materials.BookBlack} />
        <mesh geometry={nodes.Object_136.geometry} material={materials.CaseRgb} />
      </group>
      <group position={[-2.34, 0.423, 2.496]} rotation={[Math.PI / 2, 0, 0]} scale={0.191}>
        <mesh geometry={nodes.Object_138.geometry} material={materials.BookBlack} />
        <mesh geometry={nodes.Object_139.geometry} material={materials.BookBlack2} />
        <mesh geometry={nodes.Object_140.geometry} material={materials.BookRed} />
        <mesh geometry={nodes.Object_141.geometry} material={materials.BookPages} />
      </group>
      <group position={[-2.438, 1.934, -0.104]} rotation={[Math.PI / 2, 0, 0]} scale={0.191}>
        <mesh geometry={nodes.Object_143.geometry} material={materials.BookRed} />
        <mesh geometry={nodes.Object_144.geometry} material={materials.BookPages} />
        <mesh geometry={nodes.Object_145.geometry} material={materials.BookGreen} />
      </group>
      <group position={[-2.388, 1.665, 2.34]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.191}>
        <mesh geometry={nodes.Object_147.geometry} material={materials.BookBlack} />
        <mesh geometry={nodes.Object_148.geometry} material={materials.BookBlack2} />
        <mesh geometry={nodes.Object_149.geometry} material={materials.BookRed} />
        <mesh geometry={nodes.Object_150.geometry} material={materials.BookPages} />
      </group>
      <group position={[-2.472, 1.15, 0.332]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.191}>
        <mesh geometry={nodes.Object_152.geometry} material={materials.BookRed} />
        <mesh geometry={nodes.Object_153.geometry} material={materials.BookPages} />
        <mesh geometry={nodes.Object_154.geometry} material={materials.BookGreen} />
      </group>
      <group position={[-0.841, 1.21, -2.25]}>
        <mesh geometry={nodes.Object_158.geometry} material={materials.WoodenShelves} />
        <mesh geometry={nodes.Object_159.geometry} material={materials.Drawers} />
      </group>
      <group position={[-2.333, 0.266, -0.835]} rotation={[0, -1.071, 0]} scale={0.809}>
        <mesh geometry={nodes.Object_169.geometry} material={materials.ArmchairLeg} />
        <mesh geometry={nodes.Object_170.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-2.276, 0.266, -1.271]} rotation={[-Math.PI, 0.068, -Math.PI]} scale={0.809}>
        <mesh geometry={nodes.Object_176.geometry} material={materials.ArmchairLeg} />
        <mesh geometry={nodes.Object_177.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-1.844, 0.266, -1.352]} rotation={[0, -1.442, 0]} scale={0.809}>
        <mesh geometry={nodes.Object_179.geometry} material={materials.ArmchairLeg} />
        <mesh geometry={nodes.Object_180.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-1.633, 0.266, -0.966]} rotation={[0, 1.442, 0]} scale={0.809}>
        <mesh geometry={nodes.Object_182.geometry} material={materials.ArmchairLeg} />
        <mesh geometry={nodes.Object_183.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-1.936, 0.266, -0.646]} rotation={[0, -1.017, 0]} scale={0.809}>
        <mesh geometry={nodes.Object_185.geometry} material={materials.ArmchairLeg} />
        <mesh geometry={nodes.Object_186.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-2.399, 2.813, 0.397]} rotation={[0, Math.PI / 2, 0]} scale={0.146}>
        <mesh geometry={nodes.Object_188.geometry} material={materials.White} />
        <mesh geometry={nodes.Object_189.geometry} material={materials.RedCap} />
      </group>
      <group position={[-2.399, 2.885, 0.25]} rotation={[0, Math.PI / 2, 0]} scale={0.206}>
        <mesh geometry={nodes.Object_191.geometry} material={materials.VineGlass} />
        <mesh geometry={nodes.Object_192.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-0.263, 1.449, -2.353]} scale={0.243}>
        <mesh geometry={nodes.Object_200.geometry} material={materials.VineGlass} />
        <mesh geometry={nodes.Object_201.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-1.854, 0.451, 1.226]} rotation={[0, Math.PI / 2, 0]} scale={0.206}>
        <mesh geometry={nodes.Object_207.geometry} material={materials.VineGlass} />
        <mesh geometry={nodes.Object_208.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-1.887, 0.451, 1.111]} rotation={[0, Math.PI / 2, 0]} scale={0.206}>
        <mesh geometry={nodes.Object_210.geometry} material={materials.VineGlass} />
        <mesh geometry={nodes.Object_211.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-1.841, 0.451, 0.995]} rotation={[0, Math.PI / 2, 0]} scale={0.206}>
        <mesh geometry={nodes.Object_215.geometry} material={materials.VineGlass} />
        <mesh geometry={nodes.Object_216.geometry} material={materials.PureMetal} />
      </group>
      <group position={[0.5, 0.763, 1.218]} scale={0.243}>
        <mesh geometry={nodes.Object_224.geometry} material={materials.VineGlass} />
        <mesh geometry={nodes.Object_225.geometry} material={materials.PureMetal} />
      </group>
      <group position={[-1.349, 2.857, -2.776]}>
        <mesh geometry={nodes.Object_233.geometry} material={materials.PictureFrame} />
        <mesh geometry={nodes.Object_234.geometry} material={materials.Picture3} />
      </group>
      <group position={[0.345, 2.857, -2.776]}>
        <mesh geometry={nodes.Object_240.geometry} material={materials.PictureFrame} />
        <mesh geometry={nodes.Object_241.geometry} material={materials.Picture1} />
      </group>
      <group position={[-0.465, 2.857, -2.776]}>
        <mesh geometry={nodes.Object_243.geometry} material={materials.PictureFrame} />
        <mesh geometry={nodes.Object_244.geometry} material={materials.Picture2} />
      </group>
      <group position={[-2.775, 2.857, -1.644]}>
        <mesh geometry={nodes.Object_246.geometry} material={materials.PictureFrame} />
        <mesh geometry={nodes.Object_247.geometry} material={materials.Picture4} />
      </group>
      <group position={[0.169, 1.253, -1.986]} scale={0.151}>
        <mesh geometry={nodes.Object_251.geometry} material={materials.BookBlack} />
        <mesh geometry={nodes.Object_252.geometry} material={materials.CaseRgb} />
      </group>
      <group position={[-0.064, 1.254, -2.062]} scale={0.151}>
        <mesh geometry={nodes.Object_254.geometry} material={materials.CaseRgb} />
        <mesh geometry={nodes.Object_255.geometry} material={materials.BookBlack} />
      </group>
      <group position={[0.468, 1.254, -2.061]} scale={0.151}>
        <mesh geometry={nodes.Object_257.geometry} material={materials.BookBlack} />
        <mesh geometry={nodes.Object_258.geometry} material={materials.CaseRgb} />
      </group>
      <group position={[0.384, 0.199, -1.325]} scale={0.809}>
        <group position={[0, 0.086, 0.462]}>
          <mesh geometry={nodes.Object_266.geometry} material={materials.ArmchairLeg} />
          <mesh geometry={nodes.Object_267.geometry} material={materials.PureMetal} />
        </group>
        <group position={[-0.44, 0.086, 0.143]} rotation={[-Math.PI, -1.003, -Math.PI]}>
          <mesh geometry={nodes.Object_269.geometry} material={materials.ArmchairLeg} />
          <mesh geometry={nodes.Object_270.geometry} material={materials.PureMetal} />
        </group>
        <group position={[-0.272, 0.086, -0.374]} rotation={[0, -0.371, 0]}>
          <mesh geometry={nodes.Object_272.geometry} material={materials.ArmchairLeg} />
          <mesh geometry={nodes.Object_273.geometry} material={materials.PureMetal} />
        </group>
        <group position={[0.272, 0.086, -0.374]} rotation={[-Math.PI, Math.PI / 5, -Math.PI]}>
          <mesh geometry={nodes.Object_275.geometry} material={materials.ArmchairLeg} />
          <mesh geometry={nodes.Object_276.geometry} material={materials.PureMetal} />
        </group>
        <group position={[0.44, 0.086, 0.143]} rotation={[0, 0.054, 0]}>
          <mesh geometry={nodes.Object_278.geometry} material={materials.ArmchairLeg} />
          <mesh geometry={nodes.Object_279.geometry} material={materials.PureMetal} />
        </group>
        <mesh geometry={nodes.Object_260.geometry} material={materials.WatchFace} />
        <mesh geometry={nodes.Object_262.geometry} material={materials.Armchair} position={[-0.006, 0.777, -0.011]} rotation={[-Math.PI, 1.088, -Math.PI]} scale={0.404} />
        <mesh geometry={nodes.Object_264.geometry} material={materials.WoodenShelves} position={[0, 0.302, 0]} rotation={[-Math.PI, 1.084, -Math.PI]} scale={0.404} />
        <mesh geometry={nodes.Object_281.geometry} material={materials.PureMetal} position={[0, 0.232, 0]} />
        <mesh geometry={nodes.Object_283.geometry} material={materials.WatchFace} position={[0, 0.232, 0]} />
      </group>
      <mesh geometry={nodes.Object_50.geometry} material={materials.Carpet} position={[0, 0.262, 0]} />
      <mesh geometry={nodes.Object_62.geometry} material={materials.MousePad} position={[0.815, 1.235, -2.005]} scale={0.169} />
      <mesh geometry={nodes.Object_64.geometry} material={materials.MousePad} position={[-1.46, 1.235, -2.04]} rotation={[0, 0.278, 0]} scale={0.169} />
      <mesh geometry={nodes.Object_87.geometry} material={materials.WatchFace} position={[2.169, 0.827, -0.228]} scale={0.134} />
      <mesh geometry={nodes.Object_94.geometry} material={materials.BookRed} position={[-1.905, 1.266, 1.783]} rotation={[0, 0.704, -0.408]} scale={0.109} />
      <mesh geometry={nodes.Object_102.geometry} material={materials.MousePad} position={[2.145, 0.839, -0.24]} />
      <mesh geometry={nodes.Object_110.geometry} material={materials.GlassEevee} position={[-1.39, 0.854, -1.664]} scale={0.396} />
      <mesh geometry={nodes.Object_115.geometry} material={materials['WallLamp.001']} position={[0.942, 2.111, -2.738]} scale={0.063} />
      <mesh geometry={nodes.Object_117.geometry} material={materials['WallLamp.001']} position={[-2.737, 2.111, -1.118]} rotation={[0, Math.PI / 2, 0]} scale={0.063} />
      <mesh geometry={nodes.Object_119.geometry} material={materials.WoodenShelves} position={[0.653, 0.532, 1.38]} rotation={[0, 0, Math.PI]} />
      <mesh geometry={nodes.Object_121.geometry} material={materials.WoodenShelves} position={[0.653, 0.203, 1.38]} />
      <mesh geometry={nodes.Object_123.geometry} material={materials.GlassEevee} position={[0.653, 0.521, 1.38]} rotation={[0, 0, Math.PI]} />
      <mesh geometry={nodes.Object_125.geometry} material={materials.BookYellow} position={[0.701, 0.707, 1.394]} rotation={[Math.PI, -0.875, 2.734]} scale={0.109} />
      <mesh geometry={nodes.Object_127.geometry} material={materials.BlackPlasticTV} position={[-2.069, 1.245, -2.021]} rotation={[0, -0.268, 0]} scale={0.151} />
      <mesh geometry={nodes.Object_156.geometry} material={materials.PureMetal} position={[1.722, 1.595, -2.901]} />
      <mesh geometry={nodes.Object_161.geometry} material={materials.PureMetal} />
      <mesh geometry={nodes.Object_163.geometry} material={materials.Armchair} position={[-1.999, 0.826, -1.022]} rotation={[0, 0.983, 0]} scale={0.327} />
      <mesh geometry={nodes.Object_165.geometry} material={materials.WoodenShelves} position={[-2.004, 0.441, -1.014]} rotation={[0, 0.987, 0]} scale={0.327} />
      <mesh geometry={nodes.Object_167.geometry} material={materials.WatchFace} position={[-2.004, 0.197, -1.014]} rotation={[0, -1.071, 0]} scale={0.809} />
      <mesh geometry={nodes.Object_172.geometry} material={materials.PureMetal} position={[-2.004, 0.385, -1.014]} rotation={[0, -1.071, 0]} scale={0.809} />
      <mesh geometry={nodes.Object_174.geometry} material={materials.WatchFace} position={[-2.004, 0.385, -1.014]} rotation={[0, -1.071, 0]} scale={0.809} />
      <mesh geometry={nodes.Object_194.geometry} material={materials.material} position={[-0.301, 1.295, -2.049]} rotation={[0, 1.16, 0]} scale={0.08} />
      <mesh geometry={nodes.Object_196.geometry} material={materials.GlassEevee} position={[-1.846, 0.771, 1.602]} scale={0.074} />
      <mesh geometry={nodes.Object_198.geometry} material={materials.MousePad} position={[-2.553, 1.295, -1.927]} rotation={[0, -1.543, 0]} scale={0.08} />
      <mesh geometry={nodes.Object_203.geometry} material={materials.GlassEevee} position={[-1.974, 0.771, 1.538]} scale={0.074} />
      <mesh geometry={nodes.Object_205.geometry} material={materials.GlassEevee} position={[-1.869, 0.771, 1.485]} scale={0.074} />
      <mesh geometry={nodes.Object_213.geometry} material={materials.material_0} position={[-1.983, 0.451, 1.18]} rotation={[0, Math.PI / 2, 0]} scale={0.206} />
      <mesh geometry={nodes.Object_218.geometry} material={materials.GlassEevee} position={[-1.941, 1.195, 1.813]} scale={0.074} />
      <mesh geometry={nodes.Object_220.geometry} material={materials.GlassEevee} position={[0.616, 0.634, 1.485]} scale={0.074} />
      <mesh geometry={nodes.Object_222.geometry} material={materials.GlassEevee} position={[0.731, 0.636, 1.358]} rotation={[-Math.PI, -0.171, -Math.PI]} scale={0.074} />
      <mesh geometry={nodes.Object_227.geometry} material={materials.Wall} />
      <mesh geometry={nodes.Object_228.geometry} material={materials.WallConcrete} />
      <mesh geometry={nodes.Object_229.geometry} material={materials.White} />
      <mesh geometry={nodes.Object_231.geometry} material={materials.MetalDoor} />
      <mesh geometry={nodes.Object_236.geometry} material={materials.White} />
      <mesh geometry={nodes.Object_238.geometry} material={materials.Floor} />
      <mesh geometry={nodes.Object_249.geometry} material={materials.BlackPlasticTV} position={[0.214, 1.245, -2.019]} scale={0.151} />
      <mesh geometry={nodes.Object_285.geometry} material={materials.WoodenShelves} position={[-0.49, 0.03, 0.463]} scale={0.799} />
      <mesh geometry={nodes.Object_287.geometry} material={materials.WoodenShelves} position={[-2.513, 1.493, 0.51]} rotation={[Math.PI, 0, 0]} scale={0.799} />
      <mesh geometry={nodes.Object_289.geometry} material={materials.WoodenShelves} position={[-2.513, 1.493, 0.461]} rotation={[Math.PI, 0, 0]} scale={0.799} />
      <mesh geometry={nodes.Object_291.geometry} material={materials.WoodenShelves} />
    </group>
  )
}

useGLTF.preload('/models/isometric_room_house_game-ready.glb')
