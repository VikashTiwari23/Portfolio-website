import { useEffect, useState } from "react";
import { ActionIcon, Modal, ScrollArea, Tooltip } from "@mantine/core";
import { Document, Page } from "react-pdf";
import { IconDownload } from "@tabler/icons-react";
import { info } from "../User";

const ResumeViewer = (props: any) => {
  const [pageWidth, setPageWidth] = useState(() =>
    typeof window === "undefined"
      ? 640
      : Math.max(240, Math.min(window.innerWidth - 48, 700)),
  );

  useEffect(() => {
    const updateWidth = () => {
      setPageWidth(
        Math.max(240, Math.min(window.innerWidth - 48, 700)),
      );
    };

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    if (typeof props.onDocumentLoadSuccess === "function") {
      props.onDocumentLoadSuccess({ numPages });
    }
  };

  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size="min(95vw, 900px)"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-xl !font-mono">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Tooltip
            label="Download"
            className="!text-textColor"
            color="#64FFDA"
            position="right"
            offset={5}
          >
            <Modal.Title
              data-autofocus
              className="!text-whiteColor !text-2xl sm:!text-4xl !font-bold flex gap-4 items-center"
            >
              Resume
              <ActionIcon
                className="!text-primaryColor"
                component="a"
                href="Vikash_Tiwari_.pdf"
                download={info.name}
                color="#64FFDA"
                variant="filled"
                size="xl"
                aria-label="Download resume"
              >
                <IconDownload
                  className="!text-bgColor"
                  style={{ width: "70%", height: "70%" }}
                />
              </ActionIcon>
            </Modal.Title>
          </Tooltip>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgColor !text-redColor"
            color="red"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
          <Document
            file={props.file || "Vikash_Tiwari_.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={1}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ResumeViewer;
