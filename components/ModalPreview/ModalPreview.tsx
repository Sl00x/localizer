import ReactJson from "react-json-view";
import { getCollection } from "../../utils/Store/Store";

interface Props {
  collection: string;
  isOpen?: boolean;
  onClose?: () => void;
  onExport?: (object: any) => void;
}

export const ModalPreview: React.FC<Props> = ({
  collection,
  isOpen,
  onClose,
  onExport,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed flex flex-col z-50 top-0 left-0 w-full h-full backdrop-blur-md bg-black/100">
          <div className="w-full flex justify-between items-center p-4">
            <h1 className="text-gray-400 text-2xl">Visualiser pour</h1>
            <div className="flex gap-2">
              <span
                onClick={() => onExport?.(getCollection(collection))}
                className="cursor-pointer text-gray-200 underline font-semibold"
              >
                Exporter
              </span>
              <span
                onClick={() => onClose?.()}
                className="cursor-pointer text-red-500 underline font-semibold"
              >
                Fermer
              </span>
            </div>
          </div>
          <hr />
          <div className="w-full">
            <ReactJson src={getCollection(collection)} />
          </div>
        </div>
      )}
    </>
  );
};
