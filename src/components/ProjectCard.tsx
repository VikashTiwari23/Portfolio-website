import React from 'react'
import { Card, Image, Text, Badge, Button, Group ,Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectModal from './FullProjectModel';

const ProjectCard = (props:any) => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
    <Card data-aos="fade-up" data-aos-duration="3000" className="!bg-bgColor hover:!shadow-[0_0_10px_0_#64FFDA] hover:!scale-[1.02] transition-transform duration-300 ease-in-out !border-primaryColor border-2 mb-5 h-full" shadow="sm" radius="lg" padding="sm" withBorder onClick={open}>
      <Card.Section className="p-3">
        {props.project.image ? (
          <Image
            className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
            src={props.project.image}
            height={180}
            fit="contain"
            alt={props.project.title}
          />
        ) : (
          <div className="flex h-[180px] items-center justify-center rounded-xl border border-primaryColor/40 bg-bgColor text-4xl font-bold text-primaryColor">
            {props.project.title.charAt(0)}
          </div>
        )}
      </Card.Section>

      <Group justify="space-between" mt="xs" mb="xs">
        <Text className="!text-whiteColor !font-bold text-xl sm:text-2xl flex gap-2 items-center" >{props.project.title} { props.project.live && <Badge  variant="outline" color="pink" rightSection={<Indicator color="red" position="middle-end" processing></Indicator>}>Live </Badge> } </Text>
      </Group>

      <Group className="flex flex-wrap gap-2" justify="space-between" mt="xs" mb="xs">
        {props.project.technologies.map((tech:string,index:number)=>{
            return index<3 &&  <Badge key={index} variant ="light" color="#64FFDA">{tech}</Badge>
        })}
      </Group>

      <Text size="sm" c="dimmed" lineClamp={5} className="text-justify">
        {props.project.desc}
      </Text>

      <Button className="!bg-primaryColor !text-textColor " onClick={open} color="bgColor" fullWidth mt="md">
        Show More
      </Button>
    </Card>
    <FullProjectModal opened={opened} onClose={close} title={props.project.title} desc={props.project.desc} technologies={props.project.technologies} image={props.project.image} live={props.project.live} link={props.project.link} github={props.project.github} />
    </>
  )
}

export default ProjectCard
