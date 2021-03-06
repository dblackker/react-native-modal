declare module "react-native-modal" {
  import { Component, ReactNode } from "react";
  import { StyleProp, ViewStyle } from "react-native";

  type AnimationConfig = string | { from: Object; to: Object };

  export interface ModalProps {
    animationIn?: AnimationConfig;
    animationInTiming?: number;
    animationOut?: AnimationConfig;
    animationOutTiming?: number;
    avoidKeyboard?: boolean;
    backdropColor?: string;
    backdropOpacity?: number;
    backdropTransitionInTiming?: number;
    backdropTransitionOutTiming?: number;
    useNativeDriver?: boolean;
    children: ReactNode;
    hideModalContentWhileAnimating?: boolean;
    isVisible: boolean;
    onModalShow?: () => void;
    onModalHide?: () => void;
    onBackButtonPress?: () => void;
    onBackdropPress?: () => void;
    onSwipe?: () => void;
    onSwipeThreshold?: number;
    style?: StyleProp<ViewStyle>;
    swipeDirection?: string;
    scrollTo?: () => void;
    scrollOffset?: number;
  }

  class Modal extends Component<ModalProps> {}

  export default Modal;
}
