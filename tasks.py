import os

import inquirer
from invoke.tasks import task
from rich.console import Console
from rich.panel import Panel

console = Console()


@task
def rundev(c):
    c.run("cd frontend/compas_threejs && npm run dev")


@task
def buildstatic(c):
    with c.cd("frontend/compas_threejs"):
        c.run("npm run build")


@task
def example(c):
    """
    Run an example from the examples folder.
    """
    examples_path = "examples"
    examples = [
        f for f in os.listdir(examples_path) if f.endswith(".py") and f != "__init__.py"
    ]

    if not examples:
        console.print("[bold red]No examples found.[/bold red]")
        return

    questions = [
        inquirer.List(
            "example",
            message="Which example would you like to run?",
            choices=examples,
        ),
    ]

    try:
        console.print(
            Panel.fit(
                "[bold green]Select an Example to Run[/bold green]",
                border_style="green",
            )
        )
        answers = inquirer.prompt(questions)
        if answers:
            example_file = answers["example"]
            console.print(f"\n[bold green]Running {example_file}...[/bold green]\n")
            c.run(f"python examples/{example_file}")
    except KeyboardInterrupt:
        console.print("\n[bold yellow]Example selection cancelled.[/bold yellow]")
