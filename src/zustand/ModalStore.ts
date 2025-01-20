import {create} from "zustand";

type ModalStore = {
    modalVisible: boolean;
    setModalVisible: (state:boolean) => void;
};

const useModalStore = create<ModalStore>((set) => ({
    modalVisible: false,
    setModalVisible: (state: boolean) => set({modalVisible: state}),
}))

export {useModalStore};