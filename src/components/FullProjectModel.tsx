import { Badge, Indicator, Modal ,Image, Group ,Text, Button, ScrollArea} from "@mantine/core"

const FullProjectModel = (props:any) => {
   
  return (
    <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="min(95vw, 900px)" opened={props.opened} onClose={props.onClose}>
        <Modal.Overlay />
        <Modal.Content className="!rounded-xl !font-mono" >
          <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl ">
            <Modal.Title data-autofocus className="!text-whiteColor !text-2xl sm:!text-4xl !font-bold flex flex-wrap gap-3 sm:gap-4 items-center">{props.title} 
                { props.live && <Badge className="flex items-center gap-1"  variant="outline" color="pink" rightSection={<Indicator color="red" position="middle-end" processing></Indicator>}>Live </Badge> }
            </Modal.Title>
            <Modal.CloseButton size="md" iconSize={"30px"} className="!bg-bgColor !text-redColor" color="red" />
          </Modal.Header>
          <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl ">
            {props.image ? (
              <Image
                className="!pt-2 !rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
                src={props.image}
                height={240}
                fit="contain"
                alt={props.title}
              />
            ) : (
              <div className="mt-2 flex h-[240px] items-center justify-center rounded-xl border border-primaryColor/40 bg-bgColor text-6xl font-bold text-primaryColor">
                {props.title?.charAt(0)}
              </div>
            )}
            <Group className="flex flex-wrap gap-2 "  mt="md" mb="md">
                    {props.technologies.map((tech:string,index:number)=>{
                        return index<3 &&  <Badge key={index} variant ="light" color="#64FFDA">{tech}</Badge>
                    })}
            </Group>
            <Text size='lg' c='dimmed' className="!text-justify">{props.desc}</Text>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-0">
              <a href={props.github} className="w-full sm:w-[48%]" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="!border-primaryColor !text-primaryColor" fullWidth mt="md" size="lg" radius="md" onClick={props.onClose} color="#112240">
                    View Code
                </Button>
              </a>
              <a href={props.link} className="w-full sm:w-[48%]" target="_blank" rel="noopener noreferrer">
                <Button className="!bg-primaryColor !text-bgColor" size="lg" fullWidth mt="md" radius="md" onClick={props.onClose} color="bgColor">
                    View Live App
                </Button>
              </a>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
  )
}

export default FullProjectModel
